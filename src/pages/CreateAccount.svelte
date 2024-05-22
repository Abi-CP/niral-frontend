<script>
  import { onMount } from "svelte";
  import RegistrationForm from "../components/RegistrationForm.svelte";

  let regFields = {
    editable: true,
    userDetails: {
      details: {
        emailId: undefined,
        firstName: undefined,
        lastName: undefined,
        mobileNo: undefined,
        dateOfBirth: undefined,
        password: undefined,
      },
      organization: "cegian",
      specificDetails: undefined,
    },
    specificDetails: {
      cegian: {
        college: "CEG",
        rollNo: undefined,
        department: undefined,
        branch: undefined,
        year: undefined,
      },
      other: {
        college: undefined,
        department: undefined,
        branch: undefined,
        year: undefined,
        state: undefined,
        city: undefined,
      },
      professional: {
        organization: undefined,
        experience: undefined,
        state: undefined,
        city: undefined,
      },
    },
  };
</script>

<div class="reg-form-container">
  <div class="reg-form-wrapper">
    <RegistrationForm {regFields} />
  </div>
</div>

<style>
  .reg-form-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reg-form-wrapper {
    margin: 5rem 1rem;
    width: 90vw;
    max-width: 675px;
  }
</style>
