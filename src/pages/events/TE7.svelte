<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from "../../components/events/te7/Rounds.svelte";
    import Description from "../../components/events/te7/Description.svelte";
    import Schedule from "../../components/events/te7/Schedule.svelte";
    import Rules from "../../components/events/te7/Rules.svelte";
    import Contact from "../../components/events/te7/Contact.svelte";
    let title = "SQL War";
    let bannerUrl = "../../assets/img/events/sqlwar.jpeg";
    let nextRoute = "DataAlchemistsOdyssey";
    let prevRoute = "DesignWeb";
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