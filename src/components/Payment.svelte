<script>
  import toast from "svelte-french-toast";
  import { serverUrl } from "../../public/env";

  export let permitID;
  export let permitName;
  export let permitPrice;

  let transactionId;
  let date;

  let url = `${serverUrl}/participants/permit`;

  async function reqPayment() {
    const data = {
      permitID: permitID,
      transactionId: transactionId,
      transactionDate: date,
    };
    const authToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="));
    const token = authToken.split("=")[1];

    try {
      console.log(data);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {

        if(response){
          const res = await response.json()
          if(res.errorMessage){
            toast.error(res.errorMessage)
          }
          console.log(res);
          toast.error("Failed");
        }
        console.log(response);
        throw new Error("Failed to post data");
      }

      toast.success("success payment");

      const responseData = await response.json();
      console.log("Response data:", responseData);

      // Further processing of the response data can be done here
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }
</script>

<div class="payment-container">
  <h2>Payment Details</h2>
  <div class="payment-details">
    <!-- <div class="qr-code">
      <img src="qr-img.png" alt="QR Code" />
    </div> -->
    <div class="transaction-details">
      <div class="transaction-amount">Amount to be paid: ₹{permitPrice}</div>
      <div class="bank-ac">Bank Account: 123456789009876</div>
      <div class="bank-ifsc">IFSC Code: 12345678910</div>
    </div>
  </div>
  <div class="additional-details">
    <h3>Enter Your Details</h3>
    <div class="input-container">
      <label for="date">Date of transaction:</label>
      <input type="date" id="upi" name="upi" required bind:value={date} />
    </div>
    <div class="input-container">
      <label for="txn-id">Transaction ID:</label>
      <input
        type="text"
        id="txn-id"
        name="txn-id"
        required
        bind:value={transactionId}
      />
    </div>
    <button id="submit-button" on:click={reqPayment}>Verify</button>
  </div>
</div>

<style>
  .payment-container {
    width: 300px;
    padding: 20px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /* 3D shadow effect */
    backdrop-filter: blur(15px);
    text-align: center;
  }

  .payment-container h2 {
    margin: 2rem 0 1.5rem;
  }

  /* .qr-code img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: rgba(
      255,
      255,
      255,
      0.8
    ); /* Violet color with glassmorphism effect */
    /* backdrop-filter: blur(5px); Glassmorphism effect */
  /* }  */

  .transaction-details {
    margin-bottom: 2rem;
  }

  .input-container {
    margin-bottom: 10px;
  }

  .input-container label {
    display: block;
    margin-bottom: 5px;
    color: #000000; /* Text color */
  }

  .input-container input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2); /* Border color */
    background: rgba(164, 158, 158, 0.2); /* Input field background color */
    box-sizing: border-box;
    font-size: 16px;
    color: grey; /* Text color */
    backdrop-filter: blur(5px); /* Glassmorphism effect */
  }

  #submit-button {
    width: 100%;
    padding: 10px;
    background-color: rgba(
      84,
      99,
      255,
      0.8
    ); /* Violet color with glassmorphism effect */
    color: #fff; /* Text color */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    backdrop-filter: blur(5px); /* Glassmorphism effect */
  }

  #submit-button:hover {
    background-color: rgba(84, 99, 255, 1); /* Hover color */
  }
</style>
