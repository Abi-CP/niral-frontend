<script>
  import EventComp from "../../components/EventComp.svelte";


  import Description from "../../components/events/te1/Description.svelte";
  import Info from "../../components/events/te1/Info.svelte";
  import Speaker from "../../components/events/te1/Speaker.svelte";
  import Contact from "../../components/events/te1/Contact.svelte";
  let title = "Why Gen AI is inevitable for the Fortune500 companies";
  let bannerUrl = "../../assets/img/WS1.png";
  // let subtitle = "Subtitle";
  // let bg = "../../assets/img/WS1.png"
  let bg = bannerUrl;
</script>

<EventComp {title} {bannerUrl} {bg}>
  <Description slot="description" />
  <Speaker slot="rounds" />
  <Info slot="rules" />
  <Info slot="schedule" />
  <Contact slot="contact" />
</EventComp>
