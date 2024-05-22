<!-- Routes.svelte -->
<script>
    import { Route, Router } from 'svelte-routing';
    import Home from '../pages/Home.svelte';
    import Workshops from '../pages/Workshops.svelte';
    import Events from '../pages/Events.svelte';
    import Sponsors from '../pages/Sponsors.svelte';
    import Accommodation from '../pages/Accommodation.svelte';
    import Account from '../pages/Account.svelte';
    import Team from '../pages/Team.svelte';
    import Contact from '../pages/Contact.svelte';
    import Webgenie from '../pages/events/Webgenie.svelte';
  import Login from '../pages/Login.svelte';
  import Register from '../pages/Register.svelte';
  import Payment from '../pages/Payment.svelte';
  import CreateAccount from '../pages/CreateAccount.svelte';
  import WorkShopOne from '../pages/WorkShopOne.svelte';
  import Admin from '../pages/Admin.svelte';
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/workshops" component={Workshops} />
    <Route path="/workshops/Gen-AI" component={WorkShopOne} />
    <Route path="/events" component={Events}/>
    <Route path="/events/webgenie" component={Webgenie} />
    <Route path="/sponsors" component={Sponsors} />
    <Route path="/accommodation" component={Accommodation} />
    <Route path="/account" component={Account} />
    <Route path="/team" component={Team} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/payment" component={Payment}/>
    <Route path="/create-account" component={CreateAccount}/>
    <Route path='/admin' component={Admin}/>
</Router>
