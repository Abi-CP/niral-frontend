<script>
  import { showToast } from "../../lib/toast";
  import { serverUrl } from "../../../public/env";

  export let adminFormType;
  export let currAdminData = {
    _id: "2023179876",
    adminName: "Emily Johnson",
    adminPassword: "emilyPass123",
    level: 1,
    permissions: {
      manageNewAdmins: true,
      manageParticipants: true,
      manageResults: true,
      manageEventRegistrations: true,
      managePaymentStatus: true,
      eventRightsGiven: {
        te1: true,
        te2: true,
        te3: true,
        te4: true,
        te5: true,
        te6: true,
        te7: false,
        te8: true,
        te9: false,
        nte1: true,
        nte2: true,
        nte3: true,
        nte4: true,
        nte5: true,
        ws1: false,
        h1: false,
      },
    },
  };

  export let adminData = {
    _id: undefined,
    adminName: undefined,
    adminPassword: "",
    level: NaN,
    permissions: {
      manageNewAdmins: undefined,
      manageParticipants: undefined,
      manageResults: undefined,
      manageEventRegistrations: undefined,
      managePaymentStatus: undefined,
      eventRightsGiven: {
        te1: undefined,
        te2: undefined,
        te3: undefined,
        te4: undefined,
        te5: undefined,
        te6: undefined,
        te7: undefined,
        te8: undefined,
        te9: undefined,
        nte1: undefined,
        nte2: undefined,
        nte3: undefined,
        nte4: undefined,
        nte5: undefined,
        ws1: undefined,
        h1: undefined,
      },
    },
  };

  let password;

  let editable = true;
  let fetchMethod
  if (adminFormType == "add") {
    editable = true;
    fetchMethod = 'POST'
  } else if (adminFormType == "manage") {
    if (currAdminData.level < adminData.level) {
      editable = true;
      fetchMethod = 'PUT'
    } else {
      editable = false;
      showToast("error", "You can't edit Admin with higher level!");
    }
  }

  if (adminFormType == "add") {
  } else if (adminFormType == "manage") {
  }

  const handleClick = async ()=>{
    try {
    const response = await fetch(`${serverUrl}/manageAdmins/${adminFormType}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adminData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    } else {
      showToast("success", "Operation Successful")
    }

    
    
  } catch (error) {
    console.error('Error:', error);
  }
  }
</script>

<div class="container flex jcc">
  <div class="card">
    <div class="form-group">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        required
        bind:value={adminData.adminName}
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        id="user_id"
        name="user_id"
        placeholder="uid"
        required
        bind:value={adminData._id}
      />
    </div>
    <div class="form-group">
      {#if adminFormType == "add"}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          bind:value={password}
          on:input={() => {
            adminData.adminPassword = password.trim();
          }}
        />
      {:else if adminFormType == "manage"}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          bind:value={password}
          on:input={() => {
            adminData.adminPassword = password.trim();
          }}
        />
      {/if}
    </div>
    <div class="form-group">
      <input
        type="number"
        id="level"
        name="level"
        min={currAdminData.level + 1 || 1}
        placeholder="Level"
        bind:value={adminData.level}
      />
    </div>
    <div class="checkbox-card">
      <div class="checkbox-group">
        <h4>Priviledges</h4>
        {#if adminFormType == "add" || currAdminData.permissions.managePaymentStatus}
          <input
            class="clickable"
            type="checkbox"
            id="managePaymentStatus"
            name="managePaymentStatus"
            bind:value={adminData.permissions.managePaymentStatus}
          />
          <label for="managePaymentStatus" class="clickable"
            >Manage Payments</label
          ><br />
        {/if}

        {#if adminFormType == "add" || currAdminData.permissions.manageNewAdmins}
          <input
            class="clickable"
            type="checkbox"
            id="manageNewAdmins"
            name="manageNewAdmins"
            bind:value={adminData.permissions.manageNewAdmins}
          />
          <label for="manageNewAdmins" class="clickable">Manage Admins</label
          ><br />
        {/if}

        {#if adminFormType == "add" || currAdminData.permissions.manageEventRegistrations}
          <input
            class="clickable"
            type="checkbox"
            id="manageEventRegistrations"
            name="manageEventRegistrations"
            bind:value={adminData.permissions.manageEventRegistrations}
          />
          <label for="manageEventRegistrations" class="clickable"
            >Manage Event Registrations</label
          ><br />
        {/if}

        {#if adminFormType == "add" || currAdminData.permissions.manageResults}
          <input
            class="clickable"
            type="checkbox"
            id="manageResults"
            name="manageResults"
            bind:value={adminData.permissions.manageResults}
          />
          <label for="manageResults" class="clickable"
            >Manage Event Results</label
          >
        {/if}
      </div>
    </div>
    <div class="checkbox-card">
      <div class="checkbox-group">
        <h3>Events</h3>
        <div class="tech-events">
          <h4>Technical Events</h4>
          {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.te1}
            <input
              class="clickable"
              type="checkbox"
              id="te1"
              name="te1"
              bind:checked={adminData.permissions.eventRightsGiven.te1}
            />
            <label for="te1" class="clickable">Code Relay</label><br />
          {/if}

          {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.te2}
            <input
              class="clickable"
              type="checkbox"
              id="te2"
              name="te2"
              bind:checked={adminData.permissions.eventRightsGiven.te2}
            />
            <label for="te2" class="clickable">CipherCraft</label><br />
          {/if}

          {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.te3}
            <input
              class="clickable"
              type="checkbox"
              id="te3"
              name="te3"
              bind:checked={adminData.permissions.eventRightsGiven.te3}
            />
            <label for="te3" class="clickable">Software Presentation</label><br
            />
          {/if}

          {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.te4}
            <input
              class="clickable"
              type="checkbox"
              id="te4"
              name="te4"
              bind:checked={adminData.permissions.eventRightsGiven.te4}
            />
            <label for="te4" class="clickable">Code Brawl</label><br />
          {/if}

          {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.te5}
            <input
              class="clickable"
              type="checkbox"
              id="te5"
              name="te5"
              bind:checked={adminData.permissions.eventRightsGiven.te5}
            />
            <label for="te5" class="clickable">Blind Typing</label><br />
          {/if}

          {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.te6}
            <input
              class="clickable"
              type="checkbox"
              id="te6"
              name="te6"
              bind:checked={adminData.permissions.eventRightsGiven.te6}
            />
            <label for="te6" class="clickable">Design Web</label><br />
          {/if}

          {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.te7}
            <input
              class="clickable"
              type="checkbox"
              id="te7"
              name="te7"
              bind:checked={adminData.permissions.eventRightsGiven.te7}
            />
            <label for="te7" class="clickable">Sql War</label><br />
          {/if}

          {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.te8}
            <input
              class="clickable"
              type="checkbox"
              id="te8"
              name="te8"
              bind:checked={adminData.permissions.eventRightsGiven.te8}
            />
            <label for="te8" class="clickable">Technical Connection</label><br
            />
          {/if}

          {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.te9}
            <input
              class="clickable"
              type="checkbox"
              id="te9"
              name="te9"
              bind:checked={adminData.permissions.eventRightsGiven.te9}
            />
            <label for="te9" class="clickable">The Game</label><br />
          {/if}

          <div class="non-tech-events">
            <h4>Non - Tech Events</h4>
            {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.nte1}
              <input
                class="clickable"
                type="checkbox"
                id="nte1"
                name="nte1"
                bind:checked={adminData.permissions.eventRightsGiven.nte1}
              />
              <label for="nte1" class="clickable">Data Hunt</label><br />
            {/if}

            {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.nte2}
              <input
                class="clickable"
                type="checkbox"
                id="nte2"
                name="nte2"
                bind:checked={adminData.permissions.eventRightsGiven.nte2}
              />
              <label for="nte2" class="clickable">Escape Room</label><br />
            {/if}

            {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.nte3}
              <input
                class="clickable"
                type="checkbox"
                id="nte3"
                name="nte3"
                bind:checked={adminData.permissions.eventRightsGiven.nte3}
              />
              <label for="nte3" class="clickable">Movie Mayhem</label><br />
            {/if}

            {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.nte4}
              <input
                class="clickable"
                type="checkbox"
                id="nte4"
                name="nte4"
                bind:checked={adminData.permissions.eventRightsGiven.nte4}
              />
              <label for="nte4" class="clickable"
                >Oru Kadha Sollatuma Sir?</label
              ><br />
            {/if}

            {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.nte5}
              <input
                class="clickable"
                type="checkbox"
                id="nte5"
                name="nte5"
                bind:checked={adminData.permissions.eventRightsGiven.nte5}
              />
              <label for="nte5" class="clickable">Fandom Quiz(Anime)</label>
            {/if}
          </div>

          <div class="workshops">
            <h4>Workshops</h4>
            {#if adminFormType == "add" || currAdminData.permissions.eventRightsGiven.ws1}
              <input
                class="clickable"
                type="checkbox"
                id="ws1"
                name="ws1"
                bind:checked={adminData.permissions.eventRightsGiven.ws1}
              /><label for="ws1" class="clickable">Gen AI</label><br />
            {/if}
          </div>
        </div>
      </div>
      <button class="submitBtn" on:click={handleClick}>Submit</button>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 30px;
    max-width: 600px;
    width: 90%;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group input[type="text"],
  .form-group input[type="password"],
  .form-group input[type="number"] {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .checkbox-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .checkbox-group {
    margin-bottom: 15px;
  }

  .checkbox-group label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .checkbox-group div {
    margin-bottom: 10px;
  }

  .tech-events,
  .non-tech-events,
  .workshops {
    margin-bottom: 20px;
  }

  .tech-events label,
  .non-tech-events label,
  .workshops label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .tech-events input[type="checkbox"],
  .non-tech-events input[type="checkbox"],
  .workshops input[type="checkbox"] {
    margin-right: 5px;
  }
  
  .submitBtn {
  background-color: #4CAF50; /* Green background color */
  border: none; /* Remove border */
  color: white; /* White text color */
  padding: 12px 24px; /* Add some padding */
  text-align: center; /* Center the text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Display as inline block */
  font-size: 16px; /* Set font size */
  margin: 4px 2px; /* Add some margin */
  cursor: pointer; /* Change cursor to pointer on hover */
  border-radius: 4px; /* Add rounded corners */
  transition: background-color 0.3s ease; /* Add transition effect */
}

.submitBtn:hover {
  background-color: #45a049; /* Change background color on hover */
}

.submitBtn:active {
  background-color: #3e8e41; /* Change background color on click */
}

  @media (max-width: 480px) {
    .card {
      padding: 20px;
    }
  }
</style>
