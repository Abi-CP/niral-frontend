<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from '../../components/events/nte2/Rounds.svelte'
    import Description from "../../components/events/nte2/Description.svelte";
    import Schedule   from "../../components/events/nte2/Schedule.svelte";
    import Rules from '../../components/events/nte2/Rules.svelte'
    import Contact from "../../components/events/nte2/Contact.svelte";
    let title = "Movie Mayhem";
    let bannerUrl = "../../assets/img/events/MovieMayhem.jpeg"
    let nextRoute = "OruKadhaSollatumaSir";
    let prevRoute = "EscapeRoom";
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
  