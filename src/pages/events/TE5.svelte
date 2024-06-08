<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from "../../components/events/te5/Rounds.svelte";
    import Description from "../../components/events/te5/Description.svelte";
    import Schedule from "../../components/events/te5/Schedule.svelte";
    import Rules from "../../components/events/te5/Rules.svelte";
    import Contact from "../../components/events/te5/Contact.svelte";
    let title = "BLIND CODE TYPING CHALLENGE ";
    let bannerUrl = "../../assets/img/events/blindcoding.png";
    let nextRoute = "DesignWeb";
    let prevRoute = "CodeBrawl";
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
  