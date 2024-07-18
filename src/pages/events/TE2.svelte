<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from '../../components/events/te2/Rounds.svelte'
    import Description from "../../components/events/te2/Description.svelte";
    import Schedule   from "../../components/events/te2/Schedule.svelte";
    import Rules from '../../components/events/te2/Rules.svelte'
    import Contact from "../../components/events/te2/Contact.svelte";
    let title = "Cipher Craft";
    let bannerUrl = "../../assets/img/events/ciphercraft.jpeg"
    let nextRoute = "SoftwarePresentation";
    let prevRoute = "CodeRelay";
    let category = "tech";
    
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