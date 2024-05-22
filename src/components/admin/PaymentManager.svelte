<script>
  import { onMount } from "svelte";

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

  // Call the fetchPayments function when the component mounts
//   onMount(fetchPayments);
</script>
