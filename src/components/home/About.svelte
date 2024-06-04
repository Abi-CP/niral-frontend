<script>
  import { onMount } from "svelte";

  let observerInitialized = false;

  onMount(() => {
    if (!observerInitialized) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("centre");
            } else {
              entry.target.classList.remove("centre");
            }
          });
        },
        { threshold: [0.1, 0.5] }
      );

      const cards = document.querySelectorAll(".section");
      cards.forEach((card) => {
        observer.observe(card);
      });
      observerInitialized = true;
    }
  });
</script>

<div class="holder">
  <!-- <div style="width: fit-content; height: 5vh;"></div> -->
  <div
    style="color:white;width: fit-content; height: fit-content;"
    class="centre section heading"
  >
    <h5 class="headingTxt">About</h5>
  </div>
  <div class="section flex fdc aic">
    <h4>College of Engineering Guindy</h4>
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
        <img
          src="./img2.jpeg"
          style="width: 20vw;height:auto;"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
  <div class="section flex fdc aic">
    <h4 style="text-align: right;">Association of Computer Application</h4>
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
        <img
          src="./img2.jpeg"
          style="width: 20vw;height:auto;"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
  <div class="section flex fdc aic">
    <h4>Niral 2024</h4>
    <div class="container flex">
      <div class="glassCard flex aic jcc">
        <p>
          Niral is a national level technical symposium organized by the
          postgraduate students of MCA started from the year 2011. NIRAL’2024 is
          planned to be organized on March 14th and 15th 2020.
          This is a symposium that has an implied academic aspect that
          distinguishes it from other symposiums. Through this symposium, every
          student is given an opportunity of greater degree knowledge. It would
          be a great platform to showcase the aspiring technical skill,
          co-curricular activities and come out with flying colors.
        </p>
      </div>
      <div class="imgContainer flex aic jcc">
        <img
          src="./img2.jpeg"
          style="width: 20vw;height:auto;"
          alt=""
          srcset=""
        />
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
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: flex-end;
    opacity: 0;
    transition: padding 500ms ease-in-out;
  }

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
    width: 100%;
  }
  .glassCard p {
    font-size: 1.2rem;
    line-height: 2.4;
    color: #ffffff;
  }

  .imgContainer {
    min-height: 30vh;
    width: fit-content;
    /* height: auto; */
    margin: 2.5rem;
  }

  img {
    height: 100%;
    width: auto;
  }

  /* .section:nth-child(2) {
    flex-direction: row;
  }

  .section:nth-child(3) {
    flex-direction: row-reverse;
  }

  .section:nth-child(4) {
    flex-direction: row;
  } */

  .centre {
    padding: 5vh 10vw;
    opacity: 1;
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
  }

  @media (max-width: 1024px) {
    .section {
      width: auto;
    }
    .section h4{
      /* width: 80%; */
      text-align: center;
    }
    .container {
      flex-direction: column-reverse;
    }

    .imgContainer {
      width: 100%;
    }

    img {
      width: 70%;
      height: auto;
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

    .centre {
      padding: 2vh 5vw;
    }
  }
</style>
