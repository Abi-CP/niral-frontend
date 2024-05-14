<script context="module">
  import Child from "../lib/Child.svelte";

     let notifications = [];
      function createToast(type, text) {
        console.log("cT", type, text);
      let icon
      if (type == "success") {
        icon = "fa-solid fa-circle-check";
      } else if (type == "error") {
        icon = "fa-solid fa-circle-exclamation";
      } else if (type == "warning") {
        icon = "fa-solid fa-triangle-exclamation";
      } else if (type == "info") {
        icon = "fa-solid fa-circle-info";
      }
      const newToast = {
        type,
        icon,
        text,
      };
      notifications = [...notifications, newToast];
      console.log("ch1");
      setTimeout(() => removeToast(newToast), 5000);
    }
  
     function removeToast(toast) {
      notifications = notifications.filter((t) => t !== toast);
    }

    setTimeout(()=>{
    console.log("3s");
        createToast('success', "message")
    },3000)
  

  </script>
  
  <div class="buttons">
    <button
      on:click={() =>
        createToast(
          "success",
          "fa-solid fa-circle-check"
        )}>Success</button
    >
    <button
      on:click={() =>
        createToast(
          "error",
          "This is an error toast."
        )}>Error</button
    >
    <button
      on:click={() =>
        createToast(
          "warning",
          "This is a warning toast."
        )}>Warning</button
    >
    <button
      on:click={() =>
        createToast("info", "fa-solid fa-circle-info")}
      >Info</button
    >
  </div>
  
  <div class="notifications">
    {#each notifications as toast}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="m-toast {toast.type}" on:click={() => removeToast(toast)}>
        <i class={toast.icon}></i>
        <p>{toast.text}</p>
        <div class="m-close-btn">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    {/each}
  </div>

  <style>
    .buttons {
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
    }
    button {
      padding: 10px;
      margin-bottom: 10px;
    }
    .notifications {
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      top: 20px;
      right: 20px;
      z-index: 1000;
    }
    .m-toast {
      position: relative;
      padding: 10px;
      color: #fff;
      margin-bottom: 10px;
      border-radius: 5px;
      display: grid;
      grid-template-columns: 40px 1fr auto;
      align-items: center;
      animation: show 0.3s ease 1 forwards;
    }
    .m-toast i {
      color: var(--color);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: medium;
    }
    .m-toast span,
    .toast i:nth-child(2) {
      color: #fff;
    }
    .m-toast .m-close-btn {
      cursor: pointer;
      font-size: medium;
    }
    .m-toast::before {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--color);
      width: 100%;
      height: 3px;
      content: "";
      box-shadow: 0 0 10px var(--color);
      animation: timeOut 5s linear 1 forwards;
    }
  
    .m-toast.success {
      --color: #0abf30;
      background-image: linear-gradient(to right, #0abf3055, #22242f 30%);
    }
    .m-toast.error {
      --color: #f24d4c;
      background-image: linear-gradient(to right, #f24d4c55, #22242f 30%);
    }
    .m-toast.warning {
      --color: #e9bd0c;
      background-image: linear-gradient(to right, #e9bd0c55, #22242f 30%);
    }
    .m-toast.info {
      --color: #3498db;
      background-image: linear-gradient(to right, #3498db55, #22242f 30%);
    }
  
    .m-close-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: medium;
    }
    @media (max-width: 767px) {
      .m-toast {
        width: 250px;
      }
      .m-toast p {
        font-size: 0.85rem;
        padding: 0.3rem;
      }
    }
    @media (min-width: 1025px) {
      .m-toast {
        width: 300px;
      }
      .m-toast p {
        padding: 0.5rem 1rem;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      .m-toast {
        width: 400px;
      }
      .m-toast p {
        padding: 0.5rem 0.7rem;
        /* text-align: center; */
      }
    }
    @keyframes show {
      0% {
        transform: translateX(100%);
      }
      40% {
        transform: translateX(10%);
      }
      80% {
        transform: translateX(-5%);
      }
      100% {
        transform: translateX(0%);
      }
    }
    @keyframes timeOut {
      to {
        width: 0;
      }
    }
  </style>
  