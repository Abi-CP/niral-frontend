<!-- Account.svelte -->
<script>
  import { navigate } from "svelte-routing";
  import AccountForm from "../components/AccountForm.svelte";
  import { onMount } from "svelte";
  import { isLoggedIn } from "../stores/loginStatus";

  let userDetails={}

  onMount(() => {
    const userDetailsFromSession = sessionStorage.getItem("userDetails");
    if ($isLoggedIn) {
      userDetails = JSON.parse(userDetailsFromSession);
    } else {
      navigate("/login");
    }
  });

  // let accountFields = {
  //   userDetails: {
  //     details: {
  //       emailId: "abi@mail.com",
  //       firstName: "abi",
  //       lastName: "cp",
  //       mobileNo: "9099099090",
  //       dateOfBirth: "1 January 1990",
  //       college: "CEG",
  //       rollNo: "2023...",
  //       department: "ist",
  //       branch: "mca",
  //       year: "1",
  //       state: "TN",
  //       city: "guindy",
  //       organization: "ceg",
  //       experience: 1,
  //     },
  //     organization: "other",
  //   },
  //   paymentHistory: undefined,
  //   permit: undefined,
  //   eventDetails: undefined,
  // };

  userDetails = JSON.parse(sessionStorage.getItem("userDetails"));

  function logout() {
    navigate("/login");
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    sessionStorage.clear();
    isLoggedIn.set(false);
  }

  // {"_id":"2023178038","details":{"emailId":"abi@mail.com","firstName":"Abi","lastName":"CP","mobileNo":"9090909000","rollNo":"2023178038","dateOfBirth":"1 January 1990","department":"ISt","branch":"MCA","year":1,"college":"CEG","_id":"6648d9945705e331a90d8d8f"},"organization":"cegian","__v":0}
</script>

<h1>Account Page</h1>
{#if $isLoggedIn}
  <div class="wrapper">
    <div class="container">
      <input type="radio" name="slide" id="c1" checked />
      <label for="c1" class="card">
        <div class="row">
          <div class="icon">1</div>
          <div class="title">
            <h4>Details</h4>
            <div class="pHolder">
              <div class="content-wrapper">
                <AccountForm {userDetails} />
              </div>
            </div>
          </div>
        </div>
      </label>
      <!-- <input type="radio" name="slide" id="c2" />
      <label for="c2" class="card">
        <div class="row">
          <div class="icon">2</div>
          <div class="title">
            <h4>My Events</h4>
            <div class="pHolder">
              <p>Gets better every day - stay tuned</p>
              <p>Gets better every day - stay tuned</p>
            </div>
          </div>
        </div>
      </label> -->
      <input type="radio" name="slide" id="c3" />
      <label for="c3" class="card">
        <div class="row">
          <div class="icon">2</div>
          <div class="title">
            <h4>My Permits</h4>
            <div class="pHolder">
              <table>
                <thead>
                  <tr>
                    <th>Permit ID</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {#each Object.entries(userDetails.permit) as [permitId, permitDetails]}
                    <tr>
                      <td>{permitId}</td>
                      <td>{permitDetails.status}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c4" />
      <label for="c4" class="card">
        <div class="row">
          <div class="icon">3</div>
          <div class="title">
            <h4>Payment History</h4>
            <div class="pHolder">
              <table>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {#each userDetails.paymentHistory as payment}
                    <tr>
                      <td>{payment.transactionId}</td>
                      <td>{payment.status}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </label>
    </div>
  </div>
  <div class="logoutBtnContainer">
    <button on:click={logout} class="logoutBtn">Logout</button>
  </div>
{/if}

<!-- svelte-ignore css-unused-selector -->
<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  .card {
    max-width: calc(640px + 10vw);
    width: 65vw;
    /* max-width: calc(640px + 10vw); */
    height: 60px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 2rem;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: 0.3s cubic-bezier(0.28, -0.03, 0, 0.99);
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 35, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px) saturate(120%);
    -webkit-backdrop-filter: blur(10px) saturate(100%);
  }

  .card > .row {
    color: white;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: nowrap;
    padding: 5px;
  }

  .card > .row > .icon {
    background: #11111180;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card > .row > .title {
    display: flex;
    /* justify-content: flex-start; */
    flex-direction: column;
    width: 52vw;
    /* width: 450px; */
  }

  .title h4 {
    margin: 0.75rem 0 2rem;
    color: #b0b0ba;
    text-transform: uppercase;
  }

  .title .pHolder {
    background: rgba(0, 0, 0, 0);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 35, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 1.5vh;
    padding: 0 20px;
    margin: 20px 0;
    /* display: flex;
    justify-content: center; */
  }

  .title p {
    color: #b0b0ba;
    text-align: justify;
  }

  input {
    display: none;
  }

  /* input:checked + .title {
      align-items: center;
    } */

  input:checked + .card {
    height: auto;
    padding: 5px;
  }

  input:checked + label .title h4 {
    font-size: 1.4rem;
    color: #149cea;
    margin: 0.5rem 0 0 0;
  }

  #c1 .content-wrapper {
    width: 90vw;
    max-width: 640px;
  }

  .logoutBtnContainer {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .logoutBtn {
    background-color: #ff6347; /* Coral color for the button */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px; /* Adjust the top margin to create space */
    transition: background-color 0.3s;
  }

  .logoutBtn:hover {
    background-color: #ff4837; /* Darker coral color on hover */
  }

  @media (max-width: 767px) {
    .container {
      width: 75vw;
    }

    .card > .row {
      gap: 10px;
    }

    .card > .row > .title {
      width: 75vw;
    }

    input:checked + label {
      width: 85vw;
    }

    .title .pHolder {
      transform: translateX(-50px);
    }
  }

  @media (max-width: 300px) {
    .title h4 {
      font-size: 0.85rem;
      overflow: scroll;
    }

    .title .pHolder {
      font-size: 0.7rem;
      overflow: scroll;
    }

    input:checked + label .title h4 {
      font-size: 0.8rem;
    }
  }
</style>
