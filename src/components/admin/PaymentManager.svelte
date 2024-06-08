<script>
  import { onMount } from "svelte";
  import { serverUrl } from "../../../public/env";
  import { fetchPayments, updateTransactions } from "../../lib/adminFunctions";

  let getType = "";
  const endpoint = "/admin/payments/manage";

  let paymentDetails = [];
  let pendingTransactions = [];
  let verifiedTransactions = [];
  let rejectedTransactions = [];

  let statusMap = new Map();
  let deletedTransactions = [];

  paymentDetails.forEach((transaction) => {
    statusMap.set(transaction._id, transaction.status);
  });

  function categoriseTransactions() {
    pendingTransactions = paymentDetails.filter(
      (transaction) => transaction.status === "pending"
    );

    verifiedTransactions = paymentDetails.filter(
      (transaction) => transaction.status === "verified"
    );

    rejectedTransactions = paymentDetails.filter(
      (transaction) => transaction.status === "rejected"
    );
  }
  let isLoading = false;

  async function getPayments(endpoint) {
    isLoading = true;
    // console.log("getPay");
    const fetchedPayments = await fetchPayments(endpoint);
    paymentDetails = fetchedPayments || [];
    paymentDetails.forEach((transaction) => {
      statusMap.set(transaction._id, transaction.status);
    });
    isLoading = false;
    // console.log(paymentDetails);
  }

  function updateStatus(transactionId, status) {
    statusMap.set(transactionId, status);
    const updatedPaymentDetails = paymentDetails.map((transaction) =>
      transaction._id === transactionId
        ? { ...transaction, status }
        : transaction
    );
    paymentDetails = updatedPaymentDetails;
  }

  function refreshFetch() {}
  function deleteTransaction(transaction) {
    deletedTransactions = [...deletedTransactions, transaction];
    paymentDetails = paymentDetails.filter((t) => t._id !== transaction._id);
    paymentDetails.forEach((transaction) => {
      filterValue = transaction._id;
      statusMap.set(transaction._id, transaction.status);
    });
    setTimeout(() => {
      filterValue = "";
    }, 100);
  }

  function restoreTransaction(transaction) {
    paymentDetails = [...paymentDetails, transaction];
    deletedTransactions = deletedTransactions.filter(
      (t) => t._id !== transaction._id
    );
    paymentDetails.forEach((transaction) => {
      filterValue = transaction._id;
      statusMap.set(transaction._id, transaction.status);
    });
    filterValue = "";
  }

  function filterTransactions(filterValue) {
    if (!filterValue) {
      return paymentDetails;
    } else {
      return paymentDetails.filter((transaction) => {
        return (
          transaction._id.includes(filterValue) ||
          transaction.userId.includes(filterValue)
        );
      });
    }
  }

  let filterValue = "";
  function handleFilterChange(event) {
    filterValue = event.target.value.trim();
  }
</script>

<h4>PaymentManager</h4>
<div class="options">
  <button
    class="addAdmin menuBtn"
    class:selected={getType == "getPending"}
    on:click={() => {
      getType = "getPending";
      getPayments("getPending");
    }}
  >
    Pending
  </button>
  <button
    class="addAdmin menuBtn"
    class:selected={getType == "getAll"}
    on:click={() => {
      getType = "getAll";
      getPayments("getAll");
    }}
  >
    All Payments
  </button>
</div>
<div class="filter">
  <input
    type="text"
    name="idToFilter"
    id="idToFilter"
    class="idToFilter"
    placeholder="Transaction or User ID"
    on:input={handleFilterChange}
  />
  <button
    class="clearFilter clickable"
    on:click={() => {
      filterValue = "";
    }}><i class="fa-solid fa-xmark"></i></button
  >
  <button class="refresh clickable" on:click={refreshFetch}
    ><i class="fa-solid fa-rotate-right"></i></button
  >
</div>
{#if isLoading}
  <div>Loading...</div>
{:else}
  <div class="display">
    {#each filterTransactions(filterValue) as transaction}
      <div
        class="transaction-row"
        class:deleted={deletedTransactions.some(
          (t) => t._id === transaction._id
        )}
      >
        <span class="transaction-id">{transaction._id}</span>
        <span class="transactionDate date">{transaction.transactionDate}</span>
        <span class="updatedDate date">{transaction.updatedDate}</span>
        <span class="userId">{transaction.userId}</span>
        <span class="permitID">{transaction.permitId}</span>
        <div class="radio-buttons">
          <input
            type="radio"
            id="{transaction._id}-verified"
            name="{transaction._id}-status"
            value="verified"
            checked={statusMap.get(transaction._id) === "verified"}
            on:change={() => updateStatus(transaction._id, "verified")}
          />
          <label for="{transaction._id}-verified">Verified</label>
          <input
            type="radio"
            id="{transaction._id}-pending"
            name="{transaction._id}-status"
            value="pending"
            checked={statusMap.get(transaction._id) === "pending"}
            on:change={() => updateStatus(transaction._id, "pending")}
          />
          <label for="{transaction._id}-pending">Pending</label>
          <input
            type="radio"
            id="{transaction._id}-rejected"
            name="{transaction._id}-status"
            value="rejected"
            checked={statusMap.get(transaction._id) === "rejected"}
            on:change={() => updateStatus(transaction._id, "rejected")}
          />
          <label for="{transaction._id}-rejected">Rejected</label>
        </div>
        <button
          class="deleteTransaction clickable"
          on:click={() => deleteTransaction(transaction)}
        >
          <i class="fa-solid fa-trash" />
        </button>
      </div>
    {/each}
    {#each deletedTransactions as transaction}
      <div class="transaction-row deleted">
        <span class="transaction-id">{transaction._id}</span>
        <span class="transactionDate date">{transaction.transactionDate}</span>
        <span class="updatedDate date">{transaction.updatedDate}</span>
        <span class="userId">{transaction.userId}</span>
        <span class="permitID">{transaction.permitId}</span>
        <div class="radio-buttons">
          <input
            type="radio"
            id="{transaction._id}-verified"
            name="{transaction._id}-status"
            value="verified"
            checked={statusMap.get(transaction._id) === "verified"}
            disabled
          />
          <label for="{transaction._id}-verified">Verified</label>
          <input
            type="radio"
            id="{transaction._id}-pending"
            name="{transaction._id}-status"
            value="pending"
            checked={statusMap.get(transaction._id) === "pending"}
            disabled
          />
          <label for="{transaction._id}-pending">Pending</label>
          <input
            type="radio"
            id="{transaction._id}-rejected"
            name="{transaction._id}-status"
            value="rejected"
            checked={statusMap.get(transaction._id) === "rejected"}
            disabled
          />
          <label for="{transaction._id}-rejected">Rejected</label>
        </div>
        <button
          class="deleteTransaction clickable"
          on:click={() => restoreTransaction(transaction)}
        >
          <i class="fa-solid fa-rotate" />
        </button>
      </div>
    {/each}
  </div>
  <button
    class="menuBtn clickable"
    on:click={() => {
      categoriseTransactions();
      updateTransactions({
        pendingList: pendingTransactions,
        verifiedList: verifiedTransactions,
        rejectedList: rejectedTransactions,
        deletedList: deletedTransactions,
      });
    }}>Submit</button
  >
{/if}

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

  .clearFilter,
  .refresh {
    width: 15%;
    max-width: 2.5rem;
  }
  .display {
    width: 100%;
    overflow-x: auto;
  }

  .transaction-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    min-width: 800px;
  }

  .transaction-row:nth-child(odd) {
    background-color: #f2f2f2;
  }

  .transaction-row:nth-child(even) {
    background-color: #e6e6e6;
  }

  .transaction-id {
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

  .date,
  .userId,
  .radio-buttons,
  .deleteTransaction {
    /* flex: 1; */
    margin-right: 20px;
  }

  .radio-buttons {
    display: flex;
    align-items: center;
  }

  .radio-buttons input[type="radio"] {
    display: none;
  }

  .radio-buttons label {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 25px;
    margin-right: 10px;
    border: 1px solid #ccc;
  }

  .radio-buttons input[type="radio"]:checked + label {
    font-weight: bold;
    color: white;
  }

  .radio-buttons input[type="radio"]:checked + label[for*="-verified"] {
    background-color: green;
  }

  .radio-buttons input[type="radio"]:checked + label[for*="-pending"] {
    background-color: yellow;
    color: black;
  }

  .radio-buttons input[type="radio"]:checked + label[for*="-rejected"] {
    background-color: red;
  }

  .deleteTransaction {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .deleted {
    text-decoration: line-through;
    opacity: 0.5;
  }
</style>
