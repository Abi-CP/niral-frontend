<script>
    let showPopup = false;
  
    function openPopup() {
      showPopup = true;
    }
  
    function closePopup() {
      showPopup = false;
    }
  
    function handleOutsideClick(event) {
      if (event.target === document.getElementById('popupBackground')) {
        closePopup();
      }
    }
  </script>
  
  <button on:click={openPopup}>Open Popup</button>
  
  {#if showPopup}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="popupBackground" class="popup-background" on:click={handleOutsideClick}>
      <div class="popup-content">
        <h2>Popup Dialog</h2>
        <p>This is a popup dialog box.</p>
        <button on:click={closePopup}>Close</button>
      </div>
    </div>
  {/if}
  
  <style>
    .popup-background {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);backdrop-filter: blur(5px);
    }
  
    .popup-content {
      background-color: #fefefe;
      /* margin: 0% auto; */
      padding: 20px;
      border: 1px solid #888;
      width: 30%;
    }
  </style>