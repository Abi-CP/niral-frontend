<script>
  let collegeSelectedOption = "";

  let showRollno = false;
  let showCollege = false;
  let showOrganization = false;

  const handleOptionChange = (event) => {
    collegeSelectedOption = event.target.value;
    showRollno = collegeSelectedOption === "CEGian";
    showCollege = collegeSelectedOption === "Other College";
    showOrganization = collegeSelectedOption === "Working Professional";
  };
</script>

<form>
  <div class="log-container">
    <h2 class="registration-text">Registration Form</h2>
    <form action="#" method="post">
      <!-- Existing form fields... -->
      <!-- Date of Birth -->
      <div class="log-form-group">
        <label for="dob">Date of Birth:</label>
        <!-- Date of Birth fields -->
        <!-- Add fields for day, month, year -->
      </div>

      <!-- Checkboxes for selecting the type -->
      <div class="log-form-group">
        <label for="clg">Select Type:</label>
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="CEGian"
              on:change={handleOptionChange}
            />
            CEGian
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Other College"
              on:change={handleOptionChange}
            />
            Other College
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Working Professional"
              on:change={handleOptionChange}
            />
            Working Professional
          </label>
        </div>
      </div>

      <!-- Conditional rendering based on selected option -->
      {#if showRollno}
        <!-- If CEGian is selected -->
        <div class="log-form-group">
          <label for="rollno">Roll Number:</label>
          <input
            type="text"
            id="rollno"
            name="rollno"
            placeholder="Rollno"
            required
          />
          <span class="icon"><i class="fas fa-id-card"></i></span>
        </div>
      {/if}

      {#if showCollege}
        <!-- If Other College is selected -->
        <div class="log-form-group">
          <label for="college">College:</label>
          <input
            type="text"
            id="college"
            name="college"
            placeholder="College"
            required
          />
          <span class="icon"><i class="fas fa-university"></i></span>
        </div>
        <div class="log-form-group">
          <label for="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            required
          />
          <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
        </div>
        <div class="log-form-group">
          <label for="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State"
            required
          />
          <span class="icon"><i class="fas fa-globe"></i></span>
        </div>
      {/if}

      {#if showOrganization}
        <!-- If Working Professional is selected -->
        <div class="log-form-group">
          <label for="organization">Organization:</label>
          <input
            type="text"
            id="organization"
            name="organization"
            placeholder="Organization"
            required
          />
          <span class="icon"><i class="fas fa-building"></i></span>
        </div>
        <div class="log-form-group">
          <label for="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            name="experience"
            placeholder="Experience"
            required
          />
          <span class="icon"><i class="fas fa-calendar-alt"></i></span>
        </div>
        <div class="log-form-group">
          <label for="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            required
          />
          <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
        </div>
        <div class="log-form-group">
          <label for="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State"
            required
          />
          <span class="icon"><i class="fas fa-globe"></i></span>
        </div>
      {/if}

      <!-- Existing form fields... -->
    </form>
  </div>
</form>

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

  .log-form-group input[type="text"],
  .log-form-group input[type="email"],
  .log-form-group input[type="tel"],
  .log-form-group input[type="password"],
  .log-form-group select {
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
    transform: translateY(0%);
    left: 10px;
    color: #888;
  }

  .log-form-group input[type="text"]:last-child,
  .log-form-group input[type="email"]:last-child,
  .log-form-group input[type="tel"]:last-child,
  .log-form-group input[type="password"]:last-child,
  .log-form-group select:last-child {
    margin-right: 0;
  }

  .log-form-group select {
    width: calc(100% - 20px);
  }

  .registration-text {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
