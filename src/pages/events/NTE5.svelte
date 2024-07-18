<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from '../../components/events/nte5/Rounds.svelte'
    import Description from "../../components/events/nte5/Description.svelte";
    import Schedule   from "../../components/events/nte5/Schedule.svelte";
    import Rules from '../../components/events/nte5/Rules.svelte'
    import Contact from "../../components/events/nte5/Contact.svelte";
    let title = "Technical Connections";
    let bannerUrl = "../../assets/img/events/connection.png"
    let nextRoute = "EscapeRoom";
    let prevRoute = "FandomQuiz";
    let category = "nonTech";

    let bg = bannerUrl;
  </script>
  
  <EventComp {title} {bannerUrl} {bg}{nextRoute}{prevRoute}{category}>
    <Description slot="description" />
    <Rounds slot="rounds" />
    <Rules slot="rules" />
    <Schedule slot="schedule" />
    <Contact slot="contact" />
  </EventComp>
  