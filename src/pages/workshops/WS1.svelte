
<script>
  import WorkshopComp from "../../components/WorkshopComp.svelte";
import Description from "../../components/workshops/one/Description.svelte";
  import Info from "../../components/workshops/one/Info.svelte";
  import Speaker from "../../components/workshops/one/Speaker.svelte";
  import Contact from "../../components/workshops/one/Contact.svelte";
  let title = "Why Gen AI is inevitable for the Fortune500 companies";
  // let subtitle = "Subtitle";
  let bannerUrl = "../assets/img/WS1.png";
  let bg = "../assets/gif/gradient.gif"
  
</script>

<WorkshopComp {title} {bannerUrl} {bg}>
  <Description slot="description"/>
  <Speaker slot="speaker"/>
  <Info slot="info"/>
  <Contact slot="contact"/>
</WorkshopComp>
