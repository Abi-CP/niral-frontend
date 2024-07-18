<script>
  import HackathonComp from "../../components/HackathonComp.svelte";
  
  import Description from "../../components/events/h1/Description.svelte";
  import Rules from "../../components/events/h1/Rules.svelte";
  import Schedule from "../../components/events/h1/Schedule.svelte";
  import Contact from "../../components/events/h1/Contact.svelte";
  import TheChallenge from "../../components/events/h1/TheChallenge.svelte";

  let title = "Hack X Game";
  let bannerUrl = "../../assets/img/events/hackxgame.jpg";
//   let nextRoute = "MovieMayhem";
//   let prevRoute = "TechnicalConnection";
//   let category = "nonTech";
  let bg = bannerUrl;
</script>

<HackathonComp {title} {bannerUrl} {bg}>
  <Description slot="description" />
  <TheChallenge slot="rounds" />
  <Rules slot="rules" />
  <Schedule slot="schedule" />
  <Contact slot="contact" />
</HackathonComp>
