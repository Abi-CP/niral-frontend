<script>
  import toast from "svelte-french-toast";
  import { serverUrl } from "../../public/env";
  import { navigate } from "svelte-routing";
  // console.log("payment");
  export let permitID;
  export let permitName;
  export let permitPrice;

  let transactionId;
  let date = new Date().toLocaleDateString().split("/").reverse().join("-");
  let paymentType = "A/c: 39808003030";
  let screenShotSent = false;
  let url = `${serverUrl}/participants/permit`;
  export let validity;

  async function reqPayment() {
    if (!screenShotSent) {
      toast.error("Kindly Send ScreenShot of your Transaction");
      return;
    }
    const data = {
      permitID: permitID,
      transactionId: transactionId,
      transactionDate: date,
      paymentType: paymentType,
      screenShotSent: screenShotSent,
    };

    if (validity) {
      data.validity = validity;
    }
    const authToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="));
    const token = authToken.split("=")[1];

    try {
      // console.log(data);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response) {
          const res = await response.json();
          if (res.errorMessage) {
            toast.error(res.errorMessage);
          }
          console.log(res);
        }
        // console.log(response);
        throw new Error("Failed to post data");
        return;
      }

      toast.success("Permit Request Success! Reload to check status.");
      navigate('/account')
      const responseData = await response.json();
      // console.log("Response data:", responseData);

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
    <div class="permitName">{permitName}</div>
    {#if validity}
      <div class="permitName">{validity}</div>
    {/if}
    <div class="transaction-amount">Amount to be paid: ₹{permitPrice}</div>
    <div class="transaction-details">
      <select name="paymentType" id="paymentType" bind:value={paymentType}>
        <option value="A/c: 39808003030" selected>Bank Transfer</option>
        <option value="upi:naveen26m@axl ">UPI 1</option>
        <option value="upi:naveen26m@ybl">UPI 2</option>
      </select>

      {#if paymentType == "A/c: 39808003030"}
        <div class="holdername">Name: NAVEEN M</div>
        <div class="bank-ac">Bank Account: 39808003030</div>
        <div class="bank-ifsc">IFSC Code: SBIN0000932</div>
      {:else if paymentType == "upi:naveen26m@axl "}
        <div class="holdername">Name: NAVEEN M</div>

        <div class="upi">UPI ID: naveen26m@axl</div>
      {:else if paymentType == "upi:naveen26m@ybl"}
        <div class="holdername">Name: NAVEEN M</div>

        <div class="upi">UPI ID: naveen26m@ybl</div>
      {/if}
    </div>
  </div>
  <div class="additional-details">
    <h3>Enter Your Details</h3>
    <div class="input-container">
      <label for="date">Date of transaction:</label>
      <input
      type="date"
      id="date"
      name="date"
      required
      bind:value={date}
      min="2024-06-02"
      max={new Date().toLocaleDateString().split("/").reverse().join("-")}
  />
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

    <a
      href="https://wa.me/+917904374673?text=Here%20is%20my%20screenshot%20for%20{permitName}!"
      class="clickable sendScreenShot btn"
      >Send Transaction Screenshot <i class="fa-brands fa-whatsapp"></i></a
    >
    <div class="sentCheck">
      <input
        type="checkbox"
        name="screenShot"
        id="screenShot"
        bind:checked={screenShotSent}
        value="true"
      /> <span>I have sent the screenshot</span>
    </div>

    <button id="submit-button" on:click={reqPayment}>Verify</button>
  </div>
</div>

<style>
  .sentCheck {
    margin: 1.2rem 0;
  }
  .sendScreenShot.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #25d366;
    color: #fff;
    text-decoration: none;
    border-radius: 50px;
    transition: background-color 0.3s ease;
  }

  .sendScreenShot.btn:hover {
    background-color: #128c7e;
  }

  #paymentType {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    cursor: pointer;
    margin: 1.5rem 0;
  }

  #paymentType option {
    padding: 10px;
    font-size: 16px;
    font-family: Arial, sans-serif;
  }

  #paymentType option[selected] {
    background-color: #f0f0f0;
  }

  #paymentType:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .payment-container {
    max-width: 500px;
    /* width: 90%; */
    padding: 20px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /* 3D shadow effect */
    backdrop-filter: blur(15px);
    text-align: center;
  }

  .payment-container h2 {
    margin: 2rem 5% 1.5rem;
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
