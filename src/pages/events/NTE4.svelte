<script>
    import EventComp from "../../components/EventComp.svelte";
  
    import Rounds from '../../components/events/nte4/Rounds.svelte'
    import Description from "../../components/events/nte4/Description.svelte";
    import Schedule   from "../../components/events/nte4/Schedule.svelte";
    import Rules from '../../components/events/nte4/Rules.svelte'

    import Contact from "../../components/events/nte4/Contact.svelte";
    let title = "Fandom Quiz";
    let bannerUrl = "../../assets/img/events/fandomquiz.jpeg"
    let nextRoute = "TechnicalConnection";
    let prevRoute = "OruKadhaSollatumaSir";
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
  