import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3001;

// Create log files if they don't exist
const logFilePath = path.join(__dirname, 'serverLogs.txt');
const mdLogFilePath = path.join(__dirname, 'serverPageRequestLogs.md');
const visitCountFilePath = path.join(__dirname, 'serverVisitCounts.md');

if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, '');
}

if (!fs.existsSync(mdLogFilePath)) {
  const initialContent = '# Server Logs\n\nThis file contains detailed logs for page routes in your server.\n\n## Log Entries\n';
  fs.writeFileSync(mdLogFilePath, initialContent);
}

if (!fs.existsSync(visitCountFilePath)) {
  const initialContent = '# Page Visit Counts\n\n| Page | Visit Count |\n| --- | --- |\n';
  fs.writeFileSync(visitCountFilePath, initialContent);
}

const visitCounts = {};

// Middleware to log each request
app.use((req, res, next) => {
  const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  const logEntry = `[${now}] ${req.method} ${req.url}\n`;
  fs.appendFileSync(logFilePath, logEntry);

  // Log detailed entries for page routes in the .md file
  const pagePaths = ['/home', '/workshops', '/events', '/account', /* Add other page paths here */];
  if (pagePaths.includes(req.path)) {
    const mdLogEntry = `
### [${now}]

#### Request Details

- **Method:** ${req.method}
- **URL:** ${req.url}
- **IP Address:** ${req.ip}
- **User Agent:** ${req.get('User-Agent')}

#### Response

- **Status Code:** ${res.statusCode}
- **Response Time:** ${res.responseTime}ms

`;
    fs.appendFileSync(mdLogFilePath, mdLogEntry);

    // Update visit count for the page
    if (!visitCounts[req.path]) {
      visitCounts[req.path] = 0;
    }
    visitCounts[req.path]++;
    updateVisitCountsFile(visitCountFilePath, visitCounts);
  }

  next();
});

// Middleware to track response time
app.use((req, res, next) => {
  const startTime = Date.now();
  res.once('finish', () => {
    res.responseTime = Date.now() - startTime;
  });
  next();
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve index.html for any request
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function updateVisitCountsFile(filePath, visitCounts) {
  const fileContent = '# Page Visit Counts\n\n| Page | Visit Count |\n| --- | --- |\n' +
    Object.entries(visitCounts)
      .map(([page, count]) => `| ${page} | ${count} |`)
      .join('\n');

  fs.writeFileSync(filePath, fileContent);
}