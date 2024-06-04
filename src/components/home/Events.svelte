<div class="events flex aic fdc">
    <h4 class="headingTxt"> Events </h4>
    <div class="container flex jcsb">
        <div class="wrapper tech flex aic fdc">
            <h5>Tech Events</h5>
            <ul class="flex fdc aic jcc">
                <li class="clickable">
                    <h6>Code relay</h6>
                </li>
                <li class="clickable">
                    <h6>CipherCraft</h6>
                </li>
                <li class="clickable">
                    <h6>Software presentation</h6>
                </li>
                <li class="clickable">
                    <h6>Code Brawl</h6>
                </li>
                <li class="clickable">
                    <h6>Blind typing</h6>
                </li>
                <li class="clickable">
                    <h6>Design Web</h6>
                </li>
                <li class="clickable">
                    <h6>Sql war</h6>
                </li>
                <li class="clickable">
                    <h6>Technical connection</h6>
                </li>
            </ul>
        </div>
        <div class="wrapper nonTech flex aic fdc">
            <h5>Non-Tech Events</h5>
            <ul class="flex fdc aic jcc">
                <li class="clickable">
                    <h6>Escape Room</h6>
                </li>
                <li class="clickable">
                    <h6>Movie mayhem</h6>
                </li>
                <li class="clickable">
                    <h6>Oru Kadha Sollatuma Sir</h6>
                </li>
                <li class="clickable">
                    <h6>Fandom Quiz(anime)</h6>
                </li>
            </ul>
        </div>
    </div>
    <div class="wrapper flagship">
        <h5>Flagship Event</h5>
        <ul><li class="clickable">
            <h6>Hackathon</h6>
        </li></ul>
    </div>
</div>

<style>
    .events{
        padding-top:  5rem;
        background: linear-gradient(180deg, #00000074, #00000099 , #000000bb, #000000dd, #000000ff);
    }

    .headingTxt{
    background-image: linear-gradient(180deg, #ffffff 40%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  .container{
    width: 80%;
  }

  .wrapper{
    width: 35vh;
    margin-bottom: 3.5rem;
  }
  h5{

    background-image: linear-gradient(180deg, #ffffff 60%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.8rem;
    /* font-weight: 700; */
    text-transform: uppercase;
    /* color: #fff; */
    text-align: center;
    margin-bottom: 1.6rem;
  }
  .wrapper h6{
    margin: .35rem 0;
  }
.tech h6{
    text-align: center;
    background-image: linear-gradient(270deg, #ffffff 60%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.25rem;
}
.nonTech h6{
    text-align: center;
    background-image: linear-gradient(90deg, #ffffff 50%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.25rem;
}
.flagship h6{
    text-align: center;
    background-image: linear-gradient(180deg, #ffffff 50%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.25rem;
}
h6:hover{
    background-image: linear-gradient(180deg, #ffffff 70%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
}
@media (max-width: 1024px) {
    .container{
        flex-direction: column;
    }
    .wrapper{
        width: auto;
    }
}
</style>