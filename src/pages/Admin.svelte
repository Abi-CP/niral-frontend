<script>
  import AdminManagerForm from "../components/admin/AdminManagerForm.svelte";
  import EventsManager from "../components/admin/EventsManager.svelte";
  import ParticipantManagerForm from "../components/admin/ParticipantManagerForm.svelte";
    import PaymentManager from "../components/admin/PaymentManager.svelte";
    // import fetchPay
  let searchData = {
    query: undefined,
    type: "participant",
  };

  let addParticipantSelected = false;
  let addAdminSelected = false;
  let managePaymentsSelected = false;
  let manageEventsSelected = false;

  function handleButtonClick(button) {
    addParticipantSelected = button === "addParticipant";
    addAdminSelected = button === "addAdmin";
    managePaymentsSelected = button === "managePayments";
    manageEventsSelected = button === "manageEvents";
  }

  function handleAddParticipant() {
    // Logic for adding participant
    console.log("Add Participant function called");
  }

  function handleAddAdmin() {
    // Logic for adding admin
    console.log("Add Admin function called");
  }

  function handleManagePayments() {
    fetchPayments()
  }

  function handleManageEvents() {
    // Logic for managing events
    console.log("Manage Events function called");
  }

  const serverUrl = "http://localhost:5173";
  const endpoint = "/admin/payments/manage";

  export async function fetchPayments() {
    console.log("fetch");
    try {
      const response = await fetch(`${serverUrl}${endpoint}`);
      if (!response.ok) {
        throw new Error("Failed to fetch payments");
      }
      const data = await response.json();
      console.log("Payments:", data);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  }

  
  function handleSearch() {}
</script>

<div class="holder flex aic jcc">
  <div class="container">
    <div class="menu flex jcsb">
      <button
        class="addParticipant menuBtn"
        class:selected={addParticipantSelected}
        on:click={() => {
          handleButtonClick("addParticipant");
          handleAddParticipant();
        }}
      >
        Add Participant
      </button>
      <button
        class="addAdmin menuBtn"
        class:selected={addAdminSelected}
        on:click={() => {
          handleButtonClick("addAdmin");
          handleAddAdmin();
        }}
      >
        Add Admin
      </button>
      <button
        class="managePayments menuBtn"
        class:selected={managePaymentsSelected}
        on:click={() => {
          handleButtonClick("managePayments");
          handleManagePayments();
        }}
      >
        Manage Payments
      </button>
      <button
        class="manageEvents menuBtn"
        class:selected={manageEventsSelected}
        on:click={() => {
          handleButtonClick("manageEvents");
          handleManageEvents();
        }}
      >
        Manage Events
      </button>
    </div>
    <div class="searchBar">
      <form on:submit|preventDefault={handleSearch} class="flex jcsb aic">
        <input
          type="search"
          name="searchBarInput"
          id="searchBarInput"
          placeholder="Search User..."
          required
          bind:value={searchData.query}
        />
        <select
          name="searchBarSelect"
          id="searchBarSelect"
          required
          bind:value={searchData.type}
        >
          <option value="particpant" selected>Participant</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" class="search">Search</button>
      </form>
    </div>
    <div class="display">
      {#if addParticipantSelected}
        <ParticipantManagerForm />
      {:else if addAdminSelected}
        <AdminManagerForm />
      {:else if managePaymentsSelected}
      <ParticipantManagerForm/>
      {:else if manageEventsSelected}
        <EventsManager />
      {/if}
    </div>
  </div>
</div>

<style>
  .container {
    width: calc(95vw - 4rem);
    max-width: 800px;
    background: #fff;
    padding: 2rem 1rem;
    border-radius: 10px;
  }

  .menu {
    width: 100%;
    flex-wrap: wrap;
  }
  .menuBtn {
    width: 120px;
    height: 50px;
    margin: 0.5rem 0;
  }
  .searchBar {
    width: 100%;
    margin: 1.5rem 0;
  }
  #searchBarInput {
    width: 60%;
  }
  #searchBarSelect {
    width: 17%;
  }
  .search {
    width: 17%;
  }

  .menuBtn.selected {
    background-color: lightblue; /* Add your selected style here */
  }

  @media (max-width: 767px) {
    .container {
      width: 95vw;
    }
  }
</style>
