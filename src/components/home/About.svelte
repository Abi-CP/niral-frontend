<div class="holder">
  <div style="color:white;width: fit-content; height: fit-content;" class="section heading">
    <h5 class="headingTxt">About</h5>
  </div>
  <div class="section flex fdc aic">
    <h4 class="aboutTitle">College of Engineering Guindy</h4>
    <div class="container flex">
      <div class="glassCard flex aic jcc">
        <p>
          One of the most prestigious universities of India, College of
          Engineering Guindy has established its prowess in guiding countless
          young minds to glory through the excellence of technical education.
          Holding a rich history, CEG has catered to this society a number of
          bright pioneers of various fields who have contributed to the building
          of this nation and continue to be the flag bearers of quality
          education.
        </p>
      </div>
      <div class="imgContainer flex aic jcc">
        <img src="/assets/img/ceg_logo.png" alt="" srcset="" loading="lazy">
      </div>
    </div>
  </div>
  <div class="section flex fdc aic">
    <h4 class="aboutTitle association">Association of Computer Application</h4>
    <div class="container flex fdrr">
      <div class="glassCard flex aic jcc">
        <p>
          The Association of Computer Application is formulated to conduct
          Computer Applications related activities and symposiums round the year
          nurturing the academic experience of the students by their active
          participation in it.
        </p>
      </div>
      <div class="imgContainer flex aic jcc">
        <img src="/assets/img/aca_logo.png" alt="" srcset="" loading="lazy">
      </div>
    </div>
  </div>
  <div class="section flex fdc aic">
    <h4 class="aboutTitle">Niral 2024</h4>
    <div class="container flex">
      <div class="glassCard flex aic jcc">
        <p>
          Niral is a national level technical symposium organized by the
          postgraduate students of MCA started from the year 2011. NIRAL'24 is
          planned to be organized on June 13, 14 and 15 2024. This is a symposium
          that has an implied academic aspect that distinguishes it from other
          symposiums. Through this symposium, every student is given an
          opportunity of greater degree knowledge. It would be a great platform
          to showcase the aspiring technical skill, co-curricular activities and
          come out with flying colors.
        </p>
      </div>
      <div class="imgContainer flex aic jcc">
        <img src="./Niral24.jpg" alt="" srcset="" loading="lazy">
      </div>
    </div>
  </div>
</div>

<style>
  .holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("bg6.jpg");
    justify-content: center;
    overflow-x: hidden;
    background: linear-gradient(180deg, #00000000, #00000074);
  }

  .section {
    /* width: 100%; */
    height: fit-content;
    display: flex;
    align-items: flex-end;
    opacity: 1;
  }

  h4{width: 97%;
  margin-top: 3rem;}

  .glassCard {
    width: 50vw;
    min-height: 30vh;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 35, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px) saturate(120%);
    -webkit-backdrop-filter: blur(10px) saturate(100%);
    border-radius: 1.5vh;
    padding: 1.25rem 2.5rem;
    margin: 2.5rem;
    text-align: justify;
  }

  .section h4 {
    color: #ffffff;
    font-size: 1.4rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    /* width: 100%; */
  }

  .glassCard p {
    font-size: 1.2rem;
    line-height: 2.4;
    color: #ffffff;
  }

  .imgContainer {
    min-height: 30vh;
    width: fit-content;
    margin: 2.5rem;
  }

  img {
    width: 20vw;
    height: auto;
  }

  .association {
    text-align: right;
  }

  .heading {
    padding-bottom: 0;
  }

  .headingTxt {
    background-image: linear-gradient(180deg, #ffffff 40%, #ffffff38 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1000px) {
    .section {
      width: auto;
    }
    .section h4 {
      text-align: center;
    }
    .container {
      flex-direction: column-reverse;
    }

    .imgContainer {
      min-height: auto;
    }
    img {
      width: 70%;
      height: auto;
      object-fit: cover;
    }

    .aboutTitle {
      width: 80% !important;
      margin: auto;
    }
  }

  @media (max-width: 768px) {
    .heading {
      margin-top: 10vh;
    }
    .section {
      padding: 2vh 0;
    }

    .glassCard {
      width: 90vw !important;
    }
  }
</style>