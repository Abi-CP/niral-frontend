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
        round:"Round 1",
        desc:"Presentation"
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
    }
    
  </style>