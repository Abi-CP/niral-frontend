<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from '../../components/events/nte3/Rounds.svelte'
    import Description from "../../components/events/nte3/Description.svelte";
    import Schedule   from "../../components/events/nte3/Schedule.svelte";
    import Rules from '../../components/events/nte3/Rules.svelte'
    import Contact from "../../components/events/nte3/Contact.svelte";
    let title = "Oru Kadha Sollatuma Sir";
    let bannerUrl = "../../assets/img/events/orukadha.jpg"
    let nextRoute = "FandomQuiz";
    let prevRoute = "MovieMayhem";
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
  