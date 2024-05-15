<script>
  import { Link, navigate } from "svelte-routing";
  import { toast } from 'svelte-french-toast';

  let email = "";
  let password = "";

  const showToast = (type, message) => {
    return new Promise((resolve, reject) => {
      toast[type](message, {
        onDismiss: () => resolve(),
        onError: (error) => reject(error),
      });
    });
  };

  const handleSubmit = async () => {
    // Validate form fields
    if (!email || !password) {
      try {
        await showToast("error", "Please fill in all fields.");
      } catch (error) {
        console.error("Toast error:", error);
      }
      return;
    }

    try {
      // Simulated fetch request (replace with your actual fetch call)
      const response = await fetch("https://your-api-endpoint.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      // Assuming the server responds with a token and user details
      const { token, userDetails } = await response.json();

      // Store authentication token in a cookie
      document.cookie = `authToken=${token}; path=/;`;

      // Store user details in session storage
      sessionStorage.setItem("userDetails", JSON.stringify(userDetails));

      // Redirect to dashboard or home page
      navigate("/dashboard"); // Change "/dashboard" to your desired destination

      // Show success toast
      await showToast("success", "Login successful!");
    } catch (error) {
      // Show error toast
      try {
        await showToast("error", error.message || "Login failed.");
      } catch (toastError) {
        console.error("Toast error:", toastError);
      }
    }
  };
</script>

<div class="log-container">
  <h2 class="registration-text">Login Form</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="log-form-group">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
        required
        bind:value={email}
      />
      <span class="icon"><i class="fas fa-envelope"></i></span>
    </div>

    <div class="log-form-group">
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
        bind:value={password}
      />
      <span class="icon"><i class="fas fa-lock"></i></span>
    </div>

    <div class="log-form-group">
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>

    <div class="log-form-group">
      <button type="submit">Login</button>
    </div>
  </form>
</div>

<style>
  .log-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .log-form-group {
    margin-bottom: 20px;
    position: relative;
  }

  .log-form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .log-form-group input[type="email"],
  .log-form-group input[type="password"] {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
    padding-left: 40px;
  }

  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 55%;
    transform: translateY(10%);
    left: 10px;
    color: #888;
  }

  .log-form-group input[type="email"]:last-child,
  .log-form-group input[type="password"]:last-child {
    margin-right: 0;
  }

  .log-form-group button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .log-form-group button:hover {
    background-color: #45a049;
  }

  .registration-text {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
