<!-- Date - 25/05/2024
Time - 9.00am to 4.30pm
Price - Rs.250 early bird
Rs.300 normal registration
Rs.350 onspot registration -->
<script>
  import InfoCard from "../../../utils/InfoCard.svelte";

  // var parser = new DOMParser();
  let eventDetails = [
    
    { title: "Date", description: "12/06/2024", icon: "fa-solid fa-calendar-days" },
    { title: "Time", description: "9.00am to 4.30pm", icon: "fa-solid fa-clock" },
    
    { title: "Location", description: "Ada Lovelace Auditorium, IST", icon: "fa-solid fa-location-dot" },
{
      title: "Price",
      description: "₹ 299 (Add. 10% offer for early bird)",
      icon: "fa-solid fa-medal",
    },
,
  ];

</script>

{#each eventDetails as detail}
  <InfoCard
    icon={detail.icon}
    description={detail.description}
    title={detail.title}
  />
{/each}