<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from '../../components/events/nte1/Rounds.svelte'
    import Description from "../../components/events/nte1/Description.svelte";
    import Schedule   from "../../components/events/nte1/Schedule.svelte";
    import Rules from '../../components/events/nte1/Rules.svelte'
    import Speaker from "../../components/events/nte1/Speaker.svelte";
    import Contact from "../../components/events/nte1/Contact.svelte";
    let title = "Escape Room";
    let bannerUrl = "../../assets/img/events/escaperoom.png"
    let nextRoute = "MovieMayhem";
    let prevRoute = "TechnicalConnection";
    let category = "nonTech";
    
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
  