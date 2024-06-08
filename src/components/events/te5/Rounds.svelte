<!-- Vivek Soundarapandian is currently the Associate Director of BI & Visualization at LatentView Analytics

- Around 12 years of experience in Analytics Industry
- Head of Power Platform & Fabric COE at LatentView Analytics
- Skilled in Business Intelligence, Project Management, Descriptive Analytics, Diagnostic Analytics, Requirements Analysis, Problem Solving, Coaching & Mentoring and Product Development among others. 
- Developed AI based products on Conversational Analytics and Consumer based Innovation solutions. -->

<div>
    <div class="rounds">
      {#each rounds as round }
      <div class="round">  
        <h3><i class="fa-solid fa-bolt"></i> {round.round}</h3> 
        <p>&nbsp; &nbsp;&nbsp;&nbsp; {round.desc}</p>
      </div>
      {/each}
      </div>
  </div>
  <script>
    const rounds = [
    {
      "round": "Round 1",
      "desc": "Prepare to showcase your touch-typing prowess in Round 1. Participants will type out a series of paragraphs as quickly and accurately as possible. Your typing speed and precision will be under scrutiny, with every keystroke counting towards your final score. The fastest and most accurate typists will advance to the next round, where the real challenge begins."
    },
    {
      "round": "Round 2",
      "desc": "Get ready to flex your coding muscles in Round 2. Participants will be required to type out short code snippets with precision and speed. Your performance will be judged based on the accuracy of your code and the time taken to type it. The best coders will advance to the next round, where the challenge intensifies."
    },
    {
      "round": "Round 3",
      "desc": "In Round 3, prepare to take on the ultimate coding challenge. With the screen turned off, you must rely entirely on your touch-typing skills and coding knowledge to write a program that solves a given problem. This round will test your ability to think and code without visual feedback. Accuracy and efficiency are key, as every mistake can impact your score. The coder who demonstrates the best blend of speed, accuracy, and problem-solving skills will emerge as the champion of this nerve-wracking round."
    }

    ]
  </script>
  <style>
    .rounds{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .round{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .round h3{
      font-weight: bold;

    }
    .round p{
      font-size: 15px;
      text-align: justify;
      color:rgb(217, 217, 217);
      text-indent: 30px;
    }
    
  </style>