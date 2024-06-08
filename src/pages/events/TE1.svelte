<script>
  import EventComp from "../../components/EventComp.svelte";

  import Rounds from '../../components/events/te1/Rounds.svelte'
  import Description from "../../components/events/te1/Description.svelte";
  import Schedule   from "../../components/events/te1/Schedule.svelte";
  import Rules from '../../components/events/te1/Rules.svelte'
  import Speaker from "../../components/events/te1/Speaker.svelte";
  import Contact from "../../components/events/te1/Contact.svelte";
  let title = "Code Relay";
  let bannerUrl = "../../assets/img/events/coderelay.jpeg"
  let nextRoute = "CipherCraft";
  let prevRoute = "DataAlchemistsOdyssey";
  let category = "tech";
  
  // let subtitle = "Subtitle";
  // let bg = "../../assets/img/WS1.png"
  let bg = bannerUrl;
</script>

<EventComp {title} {bannerUrl} {bg}{nextRoute}{prevRoute}{category}>
  <Description slot="description" />
  <Rounds slot="rounds" />
  <Rules slot="rules" />
  <Schedule slot="schedule" />
  <Contact slot="contact" />
</EventComp>
