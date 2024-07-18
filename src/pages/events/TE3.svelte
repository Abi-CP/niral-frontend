<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from '../../components/events/te3/Rounds.svelte'
    import Description from "../../components/events/te3/Description.svelte";
    import Schedule   from "../../components/events/te3/Schedule.svelte";
    import Rules from '../../components/events/te3/Rules.svelte'
    import Contact from "../../components/events/te3/Contact.svelte";
    let title = "Software Presentation";
    let bannerUrl = "../../assets/img/events/SoftwarePresentation.jpeg"
    let nextRoute = "CodeBrawl";
    let prevRoute = "CipherCraft";
    let category = "tech";
    
    // let subtitle = "Subtitle";
    // let bg = "../../assets/img/events/?"
    let bg = bannerUrl;
  </script>
  
  <EventComp {title} {bannerUrl} {bg}{nextRoute}{prevRoute}{category}>
    <Description slot="description" />
    <Rounds slot="rounds" />
    <Rules slot="rules" />
    <Schedule slot="schedule" />
    <Contact slot="contact" />
  </EventComp>