<!-- Account.svelte -->
<script>
  import { navigate } from "svelte-routing";
  import AccountForm from "../components/AccountForm.svelte";
  import { onMount } from "svelte";
  import { isLoggedIn } from "../stores/loginStatus";
  import WorkShopPermit from "../components/permits/WorkShopPermit.svelte";
  import AccomodationPermit from "../components/permits/AccomodationPermit.svelte";

  let userDetails = {};
  let img;
  onMount(() => {
    img = new Image();
    img.src = "../assets/gif/gradient4.gif";
    img.onload = () => {
      const bgAnimImg = document.querySelector(".bgAnim img");
      if (bgAnimImg instanceof HTMLImageElement) {
        bgAnimImg.src = img.src;
      }
    };

    const userDetailsFromSession = sessionStorage.getItem("userDetails");
    if ($isLoggedIn) {
      userDetails = JSON.parse(userDetailsFromSession);
    } else {
      navigate("/login");
    }
  });

  // let accountFields = {

  userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
  // userDetails = {
  //   details: {
  //     emailId: "abitest@mail.com",
  //     firstName: "abi",
  //     lastName: "cp",
  //     mobileNo: "9099099090",
  //     dateOfBirth: "1 January 1990",
  //     college: "CEG",
  //     rollNo: "2023...",
  //     department: "ist",
  //     branch: "mca",
  //     year: "1",
  //     state: "TN",
  //     city: "guindy",
  //     organization: "ceg",
  //     experience: 1,
  //   },
  //   organization: "other",

  //   paymentHistory: {
  //     "234521817619011111579": {
  //       transactionDate: "2024-06-05",
  //       status: "pending",
  //       paymentType: "A/c: 39808003030",
  //       _id: {
  //         $oid: "6660da2a4a97e1520ce3440b",
  //       },
  //     },
  //     "234521817619011111580": {
  //       transactionDate: "2024-06-05",
  //       status: "pending",
  //       paymentType: "A/c: 39808003030",
  //       _id: {
  //         $oid: "6660da2a4a97e1520ce3440b",
  //       },
  //     },
  //   },
  //   permit: undefined,
  //   eventDetails: undefined,
  // };

  function logout() {
    navigate("/login");
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    sessionStorage.clear();
    isLoggedIn.set(false);
  }

  // {"_id":"2023178038","details":{"emailId":"abi@mail.com","firstName":"Abi","lastName":"CP","mobileNo":"9090909000","rollNo":"2023178038","dateOfBirth":"1 January 1990","department":"ISt","branch":"MCA","year":1,"college":"CEG","_id":"6648d9945705e331a90d8d8f"},"organization":"cegian","__v":0}
  // console.log(userDetails.paymentHistory);

  // console.log(userDetails.organization == "cegian" && /^202317(8|9)/.test(userDetails._id))
</script>

<!-- <div class="root"> -->
<div class="bgAnim">
  <img src="" alt="" srcset="" />
</div>
<div class="bgBlur"></div>
<!-- <h1>Account Page</h1> -->
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
              <div class="scrollable flex fdc aic permitsContainer">
                {#if userDetails.organization == "cegian" && /^202317(8|9)/.test(userDetails._id)}
                
                  <WorkShopPermit
                    date={"11-07-2024 00:00:00"}
                    status={"verified"}
                    transactionDate={"Free for MCA"}
                    transactionId={"Free for MCA"}
                    verifiedDate={"11-07-2024 00:00:00"}
                  />
                {:else if userDetails.permit && userDetails.permit.p1}
                  <WorkShopPermit
                    date={userDetails.permit.p1.updatedDate}
                    status={userDetails.permit.p1.status}
                    transactionDate={userDetails.permit.p1.transactionDate}
                    transactionId={userDetails.permit.p1.transactionId}
                    verifiedDate={userDetails.permit.p1.updatedDate}
                  />
                {/if}
                {#if userDetails.permit}
                  {#if userDetails.permit.p4}
                    <AccomodationPermit
                      date={userDetails.permit.p4.updatedDate}
                      status={userDetails.permit.p4.status}
                      transactionDate={userDetails.permit.p4.transactionDate}
                      transactionId={userDetails.permit.p4.transactionId}
                      verifiedDate={userDetails.permit.p4.updatedDate}
                      validity={userDetails.permit.p4.validity}
                    />
                  {/if}
                  <!-- {#if userDetails.permit.p2}{/if}
                {#if userDetails.permit.p3}{/if} -->
                {/if}
              </div>
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
            <div class="pHolder overflowXHidden">
              <table class="xScrollable">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Transaction Date</th>
                    <th>Status</th>
                    <th>Payment Type</th>
                    <th>Updated Date</th>
                  </tr>
                </thead>
                <tbody>
                  {#each Object.entries(userDetails.paymentHistory) as [transactionId, transaction]}
                    <tr>
                      <td>{transactionId}</td>
                      <td>{transaction.transactionDate}</td>
                      <td>{transaction.status}</td>
                      <td>{transaction.paymentType}</td>
                      <td
                        >{transaction.updatedDate
                          ? transaction.updatedDate
                          : "N/A"}</td
                      >
                      <!-- <td>{transaction._id?.$oid || ""}</td> -->
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

<!-- </div> -->

<!-- svelte-ignore css-unused-selector -->
<style>
  .bgAnim {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100% !important;
    z-index: -10;
  }
  .bgAnim img {
    width: 100% !important;
    height: 100vh;
  }
  .bgBlur {
    position: fixed;
    overflow-x: hidden;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100vh;
    z-index: -9;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
  }
  .scrollable {
    overflow: auto;
  }
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
    max-width: max-content;
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
    /* background: rgba(157, 0, 255, 0.0); */
    background: #00000080;
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
    width: 100%;
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
    .permitsContainer {
      flex-direction: column;
      align-items: center;
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

  @media (min-width: 1200px) {
    .card {
      /* max-width: auto; */
    }
  }

  .pHolder {
    width: 100%;
    overflow-x: auto;
  }

  .xScrollable {
    /* width: 100%; */
    border-collapse: collapse;
    table-layout: auto; /* Allow table cells to adjust width based on content */
  }

  th,
  td {
    padding: 8px;
    text-align: center;
    white-space: nowrap; /* Prevent text from wrapping */
  }

  /* Optional: Add some basic styling for better visibility */
  th {
    /* background-color: #f2f2f2; */
    font-weight: bold;
  }

  td {
    border-bottom: 1px solid #ddd;
  }

  tr:hover td {
    background-color: #f5f5f51b;
  }
</style>
