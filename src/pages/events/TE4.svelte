<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from "../../components/events/te4/Rounds.svelte";
    import Description from "../../components/events/te4/Description.svelte";
    import Schedule from "../../components/events/te4/Schedule.svelte";
    import Rules from "../../components/events/te4/Rules.svelte";
    import Contact from "../../components/events/te4/Contact.svelte";
    let title = "Code Brawl";
    let bannerUrl = "../../assets/img/events/codebrawl.jpeg";
    let nextRoute = "BlindTyping";
    let prevRoute = "SoftwarePresentation";
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
  