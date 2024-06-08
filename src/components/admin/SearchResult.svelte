<script>
  export let searchType;

  let getType = "";
  const endpoint = "/admin/payments/manage";
  // let searchDetails;

  function getPayments(endpoint) {
    // searchDetails = fetchPayments(endpoint);
  }

  let searchDetails = [
  {
    _id: '1',
    details: {
      emailId: 'example@example.com',
      firstName: 'John',
      lastName: 'Doe',
      mobileNo: '1234567890',
      dateOfBirth: '1990-01-01T00:00:00Z',
      password: 'password123',
      state: 'California',
      city: 'Los Angeles',
    },
    organization: 'cegian',
    permit: {
      pass1: 'none',
      pass2: 'none',
      pass3: 'none',
    },
    paymentHistory: {
      transactionId: '1234567890',
      upiId: 'example@upi',
    },
    eventsPoints: 100,
  },
]

  

  let statusMap = new Map();
  let deletedUsers = [];

  searchDetails.forEach((user) => {
    statusMap.set(user._id, user.status);
  });

  function updateStatus(transactionId, status) {
    statusMap.set(transactionId, status);
    const updatedPaymentDetails = searchDetails.map((user) =>
      user._id === transactionId
        ? { ...user, status }
        : user
    );
    searchDetails = updatedPaymentDetails;
  }

  function refreshFetch(){}

  function deleteUser(user) {
    deletedUsers = [...deletedUsers, user];
    searchDetails = searchDetails.filter((t) => t._id !== user._id);
    filterValue = user._id;
    filterValue = "";
  }

  function viewUser(user) {
   
  }
  function editUser(user) {
   
  }


  function restoreUser(user) {
    searchDetails = [...searchDetails, user];
    deletedUsers = deletedUsers.filter((t) => t._id !== user._id);
    filterValue = user._id;
    filterValue = "";
  }

  // Function to filter payment details based on _id or emailId
  function filterResults(filterValue) {
    if (filterValue === 0) {
      return searchDetails.filter((user) => {
        return (
          user._id.includes(filterValue) ||
          user.details.emailId.includes(filterValue)
        );
      });
    }
    if (!filterValue) {
      // If no filter value provided, show all transactions
      return searchDetails;
    } else {
      // Filter transactions based on _id or emailId containing the filterValue
      return searchDetails.filter((user) => {
        return (
          user._id.includes(filterValue) ||
          user.details.emailId.includes(filterValue)
        );
      });
    }
  }

  let filterValue = "";
  function handleFilterChange(event) {
    filterValue = event.target.value.trim(); // Trim whitespace from input value
  }
</script>

<h4><strong>Search Type: </strong> {searchType}</h4>

<div class="filter">
  <input
    type="text"
    name="idToFilter"
    id="idToFilter"
    class="idToFilter"
    placeholder="User ID"
    on:input={handleFilterChange}
  />
  <button
    class="clearFilter clickable"
    on:click={() => {
      filterValue = "";
    }}><i class="fa-solid fa-xmark"></i></button
  >
  <button
  class="refresh clickable"
  on:click={refreshFetch}><i class="fa-solid fa-rotate-right"></i></button
>
</div>
<div class="display">
  {#each filterResults(filterValue) as user}
    <div
      class="user-row"
      class:deleted={deletedUsers.some((t) => t._id === user._id)}
    >
      <span class="uid">{user._id}</span>
      <span class="name">{searchType == "admin" ? user.adminName : (user.details.firstName + " "+  user.details.lastName)}</span>
      {#if searchType == "participant"}
      <span class="email">{user.details.emailId}</span>
      {/if}

      <span class="options">
        {#if searchType=="admin"}
      <span class="level">{user.level}</span>
      {/if}
        <button
          class="viewUser clickable"
          on:click={() => viewUser(user)}
        >
          <i class="fa-solid fa-user" />
        </button>
        <button
          class="editUser clickable"
          on:click={() => editUser(user)}
        >
          <i class="fa-solid fa-edit" />
        </button>
        <button
          class="deleteUser clickable"
          on:click={() => deleteUser(user)}
        >
          <i class="fa-solid fa-trash" />
        </button>
      </span>
    </div>
  {/each}
  {#each deletedUsers as user}
    <div class="user-row deleted">
        <span class="uid">{user._id}</span>
        <span class="name">{user.name}</span>
        <span class="email">{user.details.emailId}</span>

      <button
        class="deleteUser clickable"
        on:click={() => restoreUser(user)}
      >
        <i class="fa-solid fa-rotate" />
      </button>
    </div>
  {/each}
</div>

<p>--- End of List ---</p>

<button
  class="menuBtn clickable"
  on:click={() => {
    // console.log(searchDetails);
    // console.log(deletedUsers);
  }}>Submit</button
>
<style>
  .menuBtn {
    width: 120px;
    height: 50px;
    margin: 0.5rem 0;
  }

  .menuBtn.selected {
    background-color: lightblue;
  }

  .filter {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1000;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .idToFilter {
    width: 70%;
  }

  .clearFilter, .refresh {
    width: 15%;
    max-width: 2.5rem;
    margin: 1rem;
  }
  .display {
    width: 100%;
    overflow-x: auto;
  }

  .user-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    min-width: 800px;
  }

  .user-row:nth-child(odd) {
    background-color: #f2f2f2;
  }

  .user-row:nth-child(even) {
    background-color: #e6e6e6;
  }

  .uid {
    position: sticky;
    left: 0;
    height: 2.5rem;
    background-color: inherit; /* Inherit the background color from the parent row */
    padding-right: 20px;
    z-index: 2;
    min-height: 100%; /* Ensure the sticky column covers the entire row height */
    word-break: break-all;
    overflow-wrap: break-word;
    display: flex;
    align-items: center;
  }

  .name,
  .emailId,
  .deleteUser {
    /* flex: 1; */
    margin-right: 20px;
  }

.level{
    margin: 0 3rem;
}

  .deleteUser, .viewUser, .editUser {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0 1rem;
  }

  .deleted {
    text-decoration: line-through;
    opacity: 0.5;
  }
</style>
