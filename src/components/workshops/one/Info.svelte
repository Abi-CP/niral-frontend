<!-- Date - 25/05/2024
Time - 9.00am to 4.30pm
Price - Rs.250 early bird
Rs.300 normal registration
Rs.350 onspot registration -->
<script>
  var parser = new DOMParser();
  let eventDetails = [
    {
      title: "Takeaway",
      description: "E Certificate",
      icon: "fa-solid fa-certificate",
    },
    { title: "Date", description: "25/05/2024", icon: "fa-solid fa-calendar-days" },
    { title: "Time", description: "9.00am to 4.30pm", icon: "fa-solid fa-clock" },
    
    { title: "Location", description: "Ada Lovelace Auditorium, IST", icon: "fa-solid fa-location-dot" },
{
      title: "Price",
      description: "₹299 (Add. 10% offer for early bird)",
      icon: "fa-solid fa-tag",
    },
,
  ];
</script>

{#each eventDetails as detail}
  <div class="infoCard flex">
    <div class="icon flex aic jcc">
      <i class="fa-solid fa-{detail.icon}"></i>
    </div>
    <div class="info flex fdc jcsb">
      <div class="infoText">{detail.description}</div>
      <div class="infoDescription">{detail.title}</div>
    </div>
  </div>
{/each}

<style>
  .infoCard {
    width: 100%;
    padding: .7rem 1rem;
    margin: .5rem;
    border-radius: 10px;
    background-color: rgba(16,18,27,.5);
  }
  
  .icon {
    margin-right: 2rem;
  }
  .info {
    width: 80%;
    min-height: 15%;
  }
  .infoDescription{font-size: .8rem;}
</style>
