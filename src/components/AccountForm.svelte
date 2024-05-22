<script>
  import { onMount } from "svelte";

  export let userDetails;


  const dob = userDetails.details.dateOfBirth.toString().split(" ");

  let cegianCheck;
  let otherCollegeCheck;
  let professionalCheck;
  if (userDetails.organization == "cegian") {
    cegianCheck = true;
    // userDetails.details.year = userDetails.details.year.toString();
    console.log(userDetails.details.year);
  } else if (userDetails.organization == "other") {
    otherCollegeCheck = true;
    // userDetails.details.year = userDetails.details.year.toString();
  } else if (userDetails.organization == "professional") {
    professionalCheck = true;
  }

</script>

<div class="log-container">
  <form>
    <div class="log-form-group">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
        disabled
        class="regInput"
        bind:value={userDetails.details.emailId}
      />
      <span class="icon"><i class="fas fa-envelope"></i></span>
    </div>

    <div class="log-form-group">
      <label for="name">Name:</label>
      <div style="display: flex" class="name_container">
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First Name"
          disabled
          style="width: calc(60% - 13px) ;"
          class="regInput"
          bind:value={userDetails.details.firstName}
        />
        <span class="icon name-icon"><i class="fas fa-user"></i></span>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          disabled
          style="width: calc(40% - 13px);padding-left: 20px"
          class="regInput"
          bind:value={userDetails.details.lastName}
        />
      </div>
    </div>

    <div class="log-form-group">
      <label for="mobile">Mobile:</label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        placeholder="xxxxxxxxxx"
        class="regInput"
        disabled
        bind:value={userDetails.details.mobileNo}
      />
      <span class="icon"><i class="fas fa-mobile-alt"></i></span>
    </div>
    <div class="log-form-group">
      <label for="dob">Date of Birth:</label>
      <div style="display: flex" class="dob-container">
        <select
          id="dob_day"
          name="dob_day"
          disabled
          style=" margin-right:6px;padding-left:28px;"
          class="regInput"
          bind:value={dob[0]}
        >
          <option value="" disabled selected hidden>Date</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select
          id="dob_month"
          name="dob_month"
          disabled
          style="margin-right:6px;padding-left:20px;"
          class="regInput"
          bind:value={dob[1]}
        >
          <option value="" disabled selected hidden>Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select
          id="dob_year"
          name="dob_year"
          disabled
          style="margin-right:6px;padding-left:20px;"
          class="regInput"
          bind:value={dob[2]}
        >
          <option value="" disabled selected hidden>Year</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
        </select>
      </div>
    </div>

    <div class="log-form-group">
      <label for="clg">Category:</label>
      <div>
        {#if cegianCheck}
          <label>
            <input
              type="radio"
              name="type"
              value="CEGian"
              checked
              class="regInput"
            />
            CEGian
          </label>
        {:else if otherCollegeCheck}
          <label>
            <input
              type="radio"
              name="type"
              value="Other College"
              class="regInput"
              checked
            />
            Other College
          </label>
        {:else if professionalCheck}
          <label>
            <input
              type="radio"
              name="type"
              value="Working Professional"
              class="regInput"
              checked
            />
            Working Professional
          </label>
        {/if}
      </div>
    </div>

    {#if cegianCheck}
      <div class="log-form-group">
        <label for="rollNo">Roll Number:</label>
        <input
          type="text"
          id="rollNo"
          name="rollNo"
          placeholder="rollNo"
          disabled
          class="regInput"
          bind:value={userDetails.details.rollNo}
        />
        <span class="icon"><i class="fas fa-id-card"></i></span>
      </div>

      <div class="log-form-group">
        <label for="college">College:</label>
        <input
          type="text"
          id="college"
          name="college"
          placeholder="College"
          disabled
          bind:value={userDetails.details.college}
        />
        <span class="icon"><i class="fas fa-university"></i></span>
      </div>

      <div class="log-form-group">
        <label for="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Ex. Information Science & Technology"
          disabled
          class="regInput"
          bind:value={userDetails.details.department}
        />
        <span class="icon"><i class="fas fa-building"></i></span>
      </div>

      <div class="log-form-group">
        <label for="branch">Branch:</label>
        <input
          type="text"
          id="branch"
          name="branch"
          placeholder="Ex. MCA"
          disabled
          class="regInput"
          bind:value={userDetails.details.branch}
        />
        <span class="icon"><i class="fas fa-building"></i></span>
      </div>

      <div class="log-form-group">
        <label for="year">Year:</label>
        <select
          id="year"
          name="year"
          disabled
          class="regInput"
          bind:value={userDetails.details.year}
        >
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          <option value="5">5th Year</option>
        </select>
        <span class="icon"><i class="fas fa-calendar-alt"></i></span>
      </div>
    {:else if otherCollegeCheck}
      <div class="log-form-group">
        <label for="college">College:</label>
        <input
          type="text"
          id="college"
          name="college"
          placeholder="College"
          disabled
          bind:value={userDetails.details.college}
        />
        <span class="icon"><i class="fas fa-university"></i></span>
      </div>
      <div class="log-form-group">
        <label for="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Department"
          disabled
          bind:value={userDetails.details.department}
        />
        <span class="icon"><i class="fas fa-building"></i></span>
      </div>
      <div class="log-form-group">
        <label for="branch">Branch:</label>
        <input
          type="text"
          id="branch"
          name="branch"
          placeholder="Ex. MCA"
          disabled
          bind:value={userDetails.details.branch}
        />
        <span class="icon"><i class="fas fa-building"></i></span>
      </div>
      <div class="log-form-group">
        <label for="year">Year:</label>
        <select
          id="year"
          name="year"
          disabled
          bind:value={userDetails.details.year}
        >
        <option value="1">1st Year</option>
        <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          <option value="5">5th Year</option>
        </select>
        <!-- <input
          type="year"
          id="year"
          name="year"
          disabled
          bind:value={userDetails.details.year}
        /> -->
        <span class="icon"><i class="fas fa-calendar-alt"></i></span>
      </div>

      <div class="log-form-group">
        <label for="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          disabled
          class="regInput"
          bind:value={userDetails.details.state}
        />
        <span class="icon"><i class="fas fa-globe"></i></span>
      </div>
      <div class="log-form-group">
        <label for="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          disabled
          bind:value={userDetails.details.city}
          class="regInput"
        />
        <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
      </div>
    {:else if professionalCheck}
      <div class="log-form-group">
        <label for="organization">Organization:</label>
        <input
          type="text"
          id="organization"
          name="organization"
          placeholder="Ex. Anna University"
          disabled
          bind:value={userDetails.details.organization}
        />
        <span class="icon"><i class="fas fa-building"></i></span>
      </div>
      <div class="log-form-group">
        <label for="experience">Experience (in years):</label>
        <input
          type="number"
          min="0"
          id="experience"
          name="experience"
          placeholder="Ex. 5"
          disabled
          bind:value={userDetails.details.experience}
        />
        <span class="icon"><i class="fas fa-building"></i></span>
      </div>

      <div class="log-form-group">
        <label for="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          disabled
          class="regInput"
          bind:value={userDetails.details.state}
        />
        <span class="icon"><i class="fas fa-globe"></i></span>
      </div>
      <div class="log-form-group">
        <label for="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          disabled
          bind:value={userDetails.details.city}
          class="regInput"
        />
        <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
      </div>
    {/if}
  </form>
</div>

<style>
  .log-container {
    width: 100%;
    max-width: 640px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* display: flex;
      flex-direction: column;
      align-items: center; */
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

  .log-form-group input[type="text"]:disabled,
  .log-form-group input[type="number"]:disabled,
  .log-form-group input[type="tel"]:disabled,
  .log-form-group input[type="email"]:disabled,
  .log-form-group input[type="tel"]:disabled,
  .log-form-group select:disabled {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid rebeccapurple;
    border-radius: 5px;
    position: relative;
    padding-left: 40px;
    color: white;
    background-color: rgba(0, 0, 0, 0.1);
  }

  /* .log-form-group .icon {
      display: flex;
      align-items: center;
      position: absolute;
      /* top: 55%; */
  /* transform: translateY(10%) !important; */
  /* left: 10px;
      color: #888;
    } */

  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 55%;
    transform: translateY(10%);
    left: 10px;
    color: #888;
  }

  .log-form-group input[type="text"]:last-child,
  .log-form-group input[type="email"]:last-child,
  .log-form-group input[type="tel"]:last-child,
  .log-form-group select:last-child {
    margin-right: 0;
  }

  .log-form-group select {
    width: calc(100% - 20px);
  }

  .dob-container select {
    width: calc(33.33% - 11px) !important;
  }

  @media (max-width: 768px) {
    .dob-container,
    .name_container {
      flex-direction: column;
    }

    .dob-container select,
    .name_container input {
      width: calc(100% - 20px) !important;
      margin-bottom: 8px;
    }

    .name-icon {
      display: none;
    }
    #lastname {
      padding-left: 40px !important;
    }
  }
</style>
