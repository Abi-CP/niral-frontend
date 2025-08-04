<script>
  import { Link } from "svelte-routing";


</script>

<div class="footer">
  <ul class="container flex jcse">
    <li class="clickable">
      <Link to="/contact">
        <h6>Contact Us</h6>
      </Link>
    </li>

    <li class="clickable">
        <Link to="/workshops">
      <h6>Workshops</h6>
        </Link>
    </li>
    <li class="clickable">
        <Link to="/accommodation">
      <h6>Accommodation</h6>
      </Link>
    </li>
    <li class="clickable">
        <Link to="/team">
      <h6>The Team</h6>
        </Link>
    </li>
  </ul>
</div>

<style>
    * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }
  .footer {
    padding: 2.5rem 0 5rem;
    background: #000000ff;
  }
  h6 {
    text-align: center;
    background-image: linear-gradient(180deg, #ffffff 50%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 0.6rem;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }
</style>
