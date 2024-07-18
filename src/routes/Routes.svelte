<!-- Routes.svelte -->
<script>
  import { Route, Router } from "svelte-routing";
  
  import Home from "../pages/Home.svelte";
  import Workshops from "../pages/Workshops.svelte";
  import Events from "../pages/Events.svelte";
  import Sponsors from "../pages/Sponsors.svelte";
  import Accommodation from "../pages/Accommodation.svelte";
  import Account from "../pages/Account.svelte";
  import Team from "../pages/Team.svelte";
  import Contact from "../pages/Contact.svelte";
  import Login from "../pages/Login.svelte";
  import Register from "../pages/Register.svelte";
  import CreateAccount from "../pages/CreateAccount.svelte";
  import WorkShopOne from "../pages/workshops/WS1.svelte";
  import Admin from "../pages/Admin.svelte";
  import AdminLogin from "../pages/admin/AdminLogin.svelte"
  import Permits from "../pages/Permits.svelte";
  import Test from "../pages/Test.svelte";
  import TE1 from "../pages/events/TE1.svelte";
  import TE2 from "../pages/events/TE2.svelte";
  import TE3 from "../pages/events/TE3.svelte";
  import TE4 from "../pages/events/TE4.svelte";
  import TE5 from "../pages/events/TE5.svelte";
  import TE6 from "../pages/events/TE6.svelte";
  import TE7 from "../pages/events/TE7.svelte";
  import TE8 from "../pages/events/TE8.svelte";
  import NTE1 from "../pages/events/NTE1.svelte";
  import NTE2 from "../pages/events/NTE2.svelte";
  import NTE3 from "../pages/events/NTE3.svelte";
  import NTE4 from "../pages/events/NTE4.svelte";
  import NTE5 from "../pages/events/NTE5.svelte";
  import HG from "../pages/events/HG.svelte";
  import NotFound from "../pages/NotFound.svelte";

</script>


<Router>
  <Route path="/" component={Home} />
  <Route path="/workshops" component={Workshops} />
  <Route path="/workshops/Gen-AI" component={WorkShopOne} />
  <Route path="/events" component={Events} />
  <Route path="/sponsors" component={Sponsors} />
  <Route path="/" component={Sponsors} />
  <Route path="/accommodation" component={Accommodation} />
  <Route path="/account" component={Account} />
  <Route path="/team" component={Team} />
  <Route path="/contact" component={Contact} />
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/permits" component={Permits} />
  <Route path="/create-account" component={CreateAccount} />
  <Route path="/admin" component={Admin} />
  <Route path="/admin/login" component={AdminLogin} />
  <Route path="/test" component={Test} />

  <Route path="/events/Tech/CodeRelay" component={TE1} />
  <Route path="/events/Tech/CipherCraft" component={TE2} />
  <Route path="/events/Tech/SoftwarePresentation" component={TE3} />
  <Route path="/events/Tech/CodeBrawl" component={TE4} />
  <Route path="/events/Tech/BlindTyping" component={TE5} />
  <Route path="/events/Tech/DesignWeb" component={TE6} />
  <Route path="/events/Tech/SqlWar" component={TE7} />
  <Route path="/events/Tech/DataAlchemistsOdyssey" component={TE8} />
  <Route path="/events/NonTech/EscapeRoom" component={NTE1} />
  <Route path="/events/NonTech/MovieMayhem" component={NTE2} />
  <Route path="/events/NonTech/OruKadhaSollatumaSir" component={NTE3} />
  <Route path="/events/NonTech/FandomQuiz" component={NTE4} />
  <Route path="/events/NonTech/TechnicalConnection" component={NTE5} />
  <Route path="/events/HackXGame" component={HG} />

  
  <Route path="/notfound" component={NotFound} />
  <Route path="/*" component={NotFound} />
</Router>
