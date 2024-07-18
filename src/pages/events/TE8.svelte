<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from "../../components/events/te8/Rounds.svelte";
    import Description from "../../components/events/te8/Description.svelte";
    import Schedule from "../../components/events/te8/Schedule.svelte";
    import Rules from "../../components/events/te8/Rules.svelte";
    import Contact from "../../components/events/te8/Contact.svelte";
    let title = "Data Alchemists Odyssey";
    let bannerUrl = "../../assets/img/events/dataAlchemistsOdyssey.jpg";
    let nextRoute = "CodeRelay";
    let prevRoute = "SqlWar";
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