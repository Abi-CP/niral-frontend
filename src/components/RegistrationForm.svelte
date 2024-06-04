<script>
  import { State, City } from "country-state-city";
  import { navigate } from "svelte-routing";
  import toast from "svelte-french-toast";
  import Login from "../pages/Login.svelte";
  import { serverUrl } from "../../public/env";

  export let regFields;

  if (regFields.editable) {
  }

  const userDetails = regFields.userDetails;

  const specificDetails = regFields.specificDetails;

  // Fetch states and cities of India
  const statesOfIndia = State.getStatesOfCountry("IN");
  let selectedState = "";
  let citiesOfSelectedState = [];

  let emailError = false;
  let phoneError = false;
  let passwordError = false;
  let passwordMatchError = false;

  const fetchCities = (event) => {
    selectedState = event.target.value;
    citiesOfSelectedState = City.getCitiesOfState("IN", selectedState);
  };

  let collegeSelectedOption = "";

  let cegianCheck = true;
  let otherCollegeCheck = false;
  let professionalCheck = false;

  const handleOptionChange = (event) => {
    collegeSelectedOption = event.target.value;
    cegianCheck = collegeSelectedOption === "CEGian";
    otherCollegeCheck = collegeSelectedOption === "Other College";
    professionalCheck = collegeSelectedOption === "Working Professional";
  };

  let dob_day, dob_month, dob_year;
  const updateSelectedDate = () => {
    userDetails.details.dateOfBirth = `${dob_day} ${dob_month} ${dob_year}`;
  };

  let passwordInput = "";

  const unlockConfirmPassword = () => {
    const confirmPasswordInput = document.getElementById("confirm_password");

    // Check if the password field is not empty
    if (passwordInput.trim() !== "") {
      confirmPasswordInput.removeAttribute("disabled");
    } else {
      confirmPasswordInput.setAttribute("disabled", "disabled");
    }
  };

  function showToast(type, message) {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  }

  const handleSubmit = async () => {
    if (!emailError && !phoneError && !passwordError && !passwordMatchError) {
      if (cegianCheck) {
        userDetails.organization = "cegian";
        userDetails.specificDetails = specificDetails.cegian;
      } else if (otherCollegeCheck) {
        userDetails.organization = "other";
        userDetails.specificDetails = specificDetails.other;
      } else if (professionalCheck) {
        userDetails.organization = "professional";
        userDetails.specificDetails = specificDetails.professional;
      }

      fetch(`${serverUrl}/participants/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      })
        .then((response) => {
          if (response.ok) {
            showToast("success", "Registration Sucessful!");
            // navigate("/account")
          }
          return response.json(); // Parse the JSON from the response
        })
        .then((data) => {
          console.log("Data received:", data);
          if (data.userDetails) {
            sessionStorage.setItem("userDetails", JSON.stringify(data.userDetails));
            console.log("ses: ", sessionStorage.getItem("userDetails"));
          } else if (data.errorMessage) {
            showToast("error", data.errorMessage);
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  };

  // document.querySelectorAll('.regInput').forEach
</script>

<div class="log-container">
  <h2 class="registration-text">Registration Form</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="log-form-group">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
        required
        class="regInput"
        bind:value={userDetails.details.emailId}
        on:change={() => {
          emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            userDetails.details.emailId
          );
        }}
      />
      <span class="icon"><i class="fas fa-envelope"></i></span>
    </div>
    {#if emailError}
      <p id="email-error" class="error-message">
        Please enter a valid email address.
      </p>
      <!-- {:else} -->
    {/if}
    <div class="log-form-group">
      <label for="name">Name:</label>
      <div style="display: flex">
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First Name"
          required
          style="width: calc(60% - 13px) !important;margin-right:6px;"
          class="regInput"
          bind:value={userDetails.details.firstName}
        />
        <span class="icon"><i class="fas fa-user"></i></span>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          required
          style="width: calc(40% - 13px) !important;padding-left: 20px !important;"
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
        required
        bind:value={userDetails.details.mobileNo}
        on:change={() => {
          phoneError = !/^\d{10}$/.test(userDetails.details.mobileNo);
        }}
      />
      <span class="icon"><i class="fas fa-mobile-alt"></i></span>
    </div>
    {#if phoneError}<p class="error-message">
        Please enter a valid 10-digit phone number.
      </p>{/if}

    <div class="log-form-group">
      <label for="dob">Date of Birth:</label>
      <div style="display: flex">
        <select
          id="dob_day"
          name="dob_day"
          required
          style="width: calc(33.33% - 11px); margin-right:6px;padding-left:28px;"
          class="regInput"
          bind:value={dob_day}
          on:change={updateSelectedDate}
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
          required
          style="width: calc(33.33% - 11px); margin-right:6px;padding-left:20px;"
          class="regInput"
          bind:value={dob_month}
          on:change={updateSelectedDate}
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
          required
          style="width: calc(33.33% - 11px); margin-right:6px;padding-left:20px;"
          class="regInput"
          bind:value={dob_year}
          on:change={updateSelectedDate}
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
        <label>
          <input
            type="radio"
            name="type"
            value="CEGian"
            checked
            class="regInput"
            on:change={handleOptionChange}
          />
          CEGian
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Other College"
            class="regInput"
            on:change={handleOptionChange}
          />
          Other College
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Working Professional"
            class="regInput"
            on:change={handleOptionChange}
          />
          Working Professional
        </label>
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
          required
          class="regInput"
          bind:value={specificDetails.cegian.rollNo}
        />
        <span class="icon"><i class="fas fa-id-card"></i></span>
      </div>

      <div class="log-form-group">
        <label for="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Ex. Information Science & Technology"
          required
          class="regInput"
          bind:value={specificDetails.cegian.department}
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
          required
          class="regInput"
          bind:value={specificDetails.cegian.branch}
        />
        <span class="icon"><i class="fas fa-building"></i></span>
      </div>

      <div class="log-form-group">
        <label for="year">Year:</label>
        <select
          id="year"
          name="year"
          required
          class="regInput"
          bind:value={specificDetails.cegian.year}
        >
          {#if !regFields.editable}
            <option selected
              >{specificDetails.cegian.year ||
                specificDetails.other.year}</option
            >
          {/if}
          <option value="" disabled hidden selected>Select Year</option>
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
          required
          bind:value={specificDetails.other.college}
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
          required
          bind:value={specificDetails.other.department}
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
          required
          bind:value={specificDetails.other.branch}
        />
        <span class="icon"><i class="fas fa-building"></i></span>
      </div>
      <div class="log-form-group">
        <label for="year">Year:</label>
        <select
          id="year"
          name="year"
          required
          bind:value={specificDetails.other.year}
        >
          <option value="" disabled selected hidden>Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          <option value="5">5th Year</option>
        </select>
        <span class="icon"><i class="fas fa-calendar-alt"></i></span>
      </div>
      <div class="log-form-group">
        <label for="state">State:</label>
        <select
          id="state"
          name="state"
          required
          bind:value={specificDetails.other.state}
          on:change={fetchCities}
        >
          <option value="" disabled selected hidden>Select State</option>
          {#each statesOfIndia as state}
            <option value={state.isoCode}>{state.name}</option>
          {/each}
        </select>
        <span class="icon"><i class="fas fa-globe"></i></span>
      </div>

      <div class="log-form-group">
        <label for="city">City:</label>
        <select
          id="city"
          name="city"
          required
          bind:value={specificDetails.other.city}
        >
          <option value="" disabled selected hidden>Select City</option>
          {#each citiesOfSelectedState as city}
            <option value={city.name}>{city.name}</option>
          {/each}
        </select>
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
          required
          bind:value={specificDetails.professional.organization}
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
          required
          bind:value={specificDetails.professional.experience}
        />
        <span class="icon"><i class="fas fa-building"></i></span>
      </div>
      <div class="log-form-group">
        <label for="state">State:</label>
        <select
          id="state"
          name="state"
          required
          bind:value={specificDetails.professional.state}
          on:change={fetchCities}
        >
          <option value="" disabled selected hidden>Select State</option>
          {#each statesOfIndia as state}
            <option value={state.isoCode}>{state.name}</option>
          {/each}
        </select>
        <span class="icon"><i class="fas fa-globe"></i></span>
      </div>

      <div class="log-form-group">
        <label for="city">City:</label>
        <select
          id="city"
          name="city"
          required
          bind:value={specificDetails.professional.city}
        >
          <option value="" disabled selected hidden>Select City</option>
          {#each citiesOfSelectedState as city}
            <option value={city.name}>{city.name}</option>
          {/each}
        </select>
        <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
      </div>
    {/if}

    {#if regFields.editable}
      <div class="log-form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          bind:value={passwordInput}
          on:input={unlockConfirmPassword}
          on:change={() => {
            passwordError = passwordInput.length < 8;
          }}
        />
        <span class="icon"><i class="fas fa-lock"></i></span>
      </div>
      {#if passwordError}<p class="error-message">
          Password must be at least 8 characters long.
        </p>{/if}
      <div class="log-form-group">
        <label for="confirm_password">Confirm Password:</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          placeholder="Confirm Password"
          bind:value={userDetails.details.password}
          on:change={() => {
            if (passwordInput == userDetails.details.password) {
              passwordMatchError = false;
            } else {
              passwordMatchError = true;
            }
          }}
          required
          disabled
        />
        <span class="icon"><i class="fas fa-lock"></i></span>
      </div>
      {#if passwordMatchError}
        <p class="error-message">Passwords do not match!</p>
      {/if}

      <!-- <div class="log-form-group">
  <label for="referral_code">Referral Code (optional):</label>
  <input
    type="text"
    id="referral_code"
    name="referral_code"
    placeholder="Referral Code"
  />
  <span class="icon"><i class="fas fa-user-friends"></i></span>
</div> -->
      <div class="log-form-group">
        <button type="submit" id="submit">Register</button>
      </div>
    {/if}
  </form>
</div>

<style>
  .log-container {
    /* max-width: 600px; */
    padding: 20px;
    background-color: #ffffffa8;
    backdrop-filter: blur(5px);
    color: #000;
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

  .log-form-group input[type="text"],
  .log-form-group input[type="number"],
  .log-form-group input[type="tel"],
  .log-form-group input[type="email"],
  .log-form-group input[type="tel"],
  .log-form-group input[type="password"],
  .log-form-group select {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #cccccc4d;
    border-radius: 5px;
    position: relative;
    padding-left: 40px;
  }

  .log-form-group input[type="text"]:focus,
  .log-form-group input[type="number"]:focus,
  .log-form-group input[type="tel"]:focus,
  .log-form-group input[type="email"]:focus,
  .log-form-group input[type="tel"]:focus,
  .log-form-group input[type="password"]:focus,
  .log-form-group select:focus,
  .log-form-group button:focus {
    border: 2px solid #663399;
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
  .log-form-group input[type="password"]:last-child,
  .log-form-group select:last-child {
    margin-right: 0;
  }

  .log-form-group select {
    width: calc(100% - 20px);
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

  .log-form-group button:hover,
  .log-form-group button:focus {
    background-color: #45a049;
  }

  .registration-text {
    text-align: center;
    margin-bottom: 20px;
  }
  .error-message {
    /* display: none; */
    color: red;
    font-size: 0.8rem;
    margin-top: -20px;
    /* transform: translateY(20px); */
    margin-bottom: 1.25rem;
  }
</style>
