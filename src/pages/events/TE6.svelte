<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from "../../components/events/te6/Rounds.svelte";
    import Description from "../../components/events/te6/Description.svelte";
    import Schedule from "../../components/events/te6/Schedule.svelte";
    import Rules from "../../components/events/te6/Rules.svelte";
    import Contact from "../../components/events/te6/Contact.svelte";
    let title = " Designing Web";
    let bannerUrl = "../../assets/img/events/webdesign.jpeg";
    let nextRoute = "SqlWar";
    let prevRoute = "BlindTyping";
    let category = "tech";
  
    // let subtitle = "Subtitle";
    // let bg = "../../assets/img/events/?"
    let bg = bannerUrl;
  </script>
  
  <EventComp {title} {bannerUrl} {bg} {nextRoute} {prevRoute} {category}>
    <Description slot="description" />
    <Rounds slot="rounds" />
    <Rules slot="rules" />
    <Schedule slot="schedule" />
    <Contact slot="contact" />
  </EventComp>