
<script>

import Description from "../../components/workshops/one/Description.svelte";
  import Info from "../../components/workshops/one/Info.svelte";
  import Speaker from "../../components/workshops/one/Speaker.svelte";
  import Contact from "../../components/workshops/one/Contact.svelte";
  import EventComp from "../../components/EventComp.svelte";
  let title = "Why Gen AI is inevitable for the Fortune500 companies";
  let subtitle = "Subtitle";
  let bannerUrl = "../img2.jpeg";
  let bg = "../assets/gif/gradient3.gif"
  
</script>

<EventComp {title} {subtitle} {bannerUrl} {bg}>
  <Description slot="description"/>
  <Speaker slot="round"/>
  <Info slot="info"/>
  <Contact slot="contact"/>
</EventComp>
