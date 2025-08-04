<script>
  import { navigate } from "svelte-routing";
  import AdminManagerForm from "../components/admin/AdminManagerForm.svelte";
  import EventsManager from "../components/admin/EventsManager.svelte";
  import ParticipantManagerForm from "../components/admin/ParticipantManagerItem.svelte";
  import PaymentManager from "../components/admin/PaymentManager.svelte";
  import SearchResult from "../components/admin/SearchResult.svelte";
  import { serverUrl } from "../../config";
  import { onMount } from "svelte";
  // import fetchPay

  let adminData;
  let adminFormType = "add";
  onMount(() => {
    const adminDataFromSessionStorage = sessionStorage.getItem("adminDetails");
    if (!adminDataFromSessionStorage) {
      navigate("/admin/login");
      const data = JSON.parse(adminDataFromSessionStorage);
      adminData = data;
    }
  });

  // console.log(adminData);

  let search = false;
  let addParticipantSelected = false;
  let addAdminSelected = false;
  let managePaymentsSelected = false;
  let manageEventsSelected = false;

  function handleSelection(button) {
    search = button === "search";
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
    fetchPayments();
  }

  function handleManageEvents() {
    // Logic for managing events
    console.log("Manage Events function called");
  }

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

  let searchData = {
    query: undefined,
    type: "participant",
  };
  let searchType;

  function handleSearch() {
    handleSelection("search");
    searchType = searchData.type;
    searchType = "participant";
  }
</script>

<div class="holder flex aic jcc">
  <div class="container">
    <div class="menu flex jcsb">
      <button
        class="addParticipant menuBtn"
        class:selected={addParticipantSelected}
        on:click={() => {
          handleSelection("addParticipant");
          handleAddParticipant();
        }}
      >
        Add Participant
      </button>
      <button
        class="addAdmin menuBtn"
        class:selected={addAdminSelected}
        on:click={() => {
          handleSelection("addAdmin");
          handleAddAdmin();
        }}
      >
        Add Admin
      </button>
      <button
        class="managePayments menuBtn"
        class:selected={managePaymentsSelected}
        on:click={() => {
          handleSelection("managePayments");
          handleManagePayments();
        }}
      >
        Manage Payments
      </button>
      <button
        class="manageEvents menuBtn"
        class:selected={manageEventsSelected}
        on:click={() => {
          handleSelection("manageEvents");
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
          <option
            value="participant"
            selected={searchData.type === "participant"}>Participant</option
          >
          <option value="admin" selected={searchData.type === "admin"}
            >Admin</option
          >
        </select>

        <button type="submit" class="search">Search</button>
      </form>
    </div>
    <div class="display">
      {#if search}
        <SearchResult {searchType} />
      {:else if addParticipantSelected}
        <ParticipantManagerForm />
      {:else if addAdminSelected}
        <AdminManagerForm {adminFormType} />
      {:else if managePaymentsSelected}
        <PaymentManager />
      {:else if manageEventsSelected}
        <EventsManager />
      {/if}
    </div>
  </div>
</div>

<style>
  .container {
    width: calc(95vw - 4rem);
    max-width: 1000px;
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

  .menuBtn.selected {
    background-color: lightblue; /* Add your selected style here */
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

  @media (max-width: 767px) {
    .container {
      width: 95vw;
    }
  }
</style>
