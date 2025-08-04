<!-- Team.svelte -->
<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  // Add any necessary script logic here
  // onMount(() => {
  //   navigate("/")
  // })
</script>

<!-- <h1>Team Page</h1> -->
<!-- Add your content here -->

<div class="pageRoot flex aic jcc fdc">
  <div class="container">
    <h3>Meet The Team</h3>
    <div class="row flex jcse">
      <div class="card flex aic jcc fdc">
        <h6>Chairperson</h6>
        <img src="./assets/img/ob/KiruthikSKumar.jpg" alt="" />
        <h5>Kiruthik S Kumar</h5>
      </div>
      <div class="card flex aic jcc fdc">
        <h6>Vice Chairperson</h6>
        <img src="./assets/img/ob/KavyaS.jpg" alt="" />
        <h5>Kavya S</h5>
      </div>
    </div>
    <div class="row flex jcse">
      <div class="card flex aic jcc fdc">
        <h6>General Secretary</h6>
        <img src="./assets/img/ob/GeorgeLifinRell.png" alt="" />
        <h5>George Lifin Rell V</h5>
      </div>
      <div class="card flex aic jcc fdc">
        <h6>Student Treasurer</h6>
        <img src="./assets/img/ob/NaveenM.jpg" alt="" />
        <h5>Naveen M</h5>
      </div>
    </div>
    <h6>Director(s) - Technical Operations</h6>
    <div class="row flex jcse">
      <div class="card flex aic jcc fdc">
        <img src="./assets/img/ob/AbishekCP.jpg" alt="" />
        <h5>Abishek C P</h5>
      </div>
      <div class="card flex aic jcc fdc">
        <img src="./assets/img/ob/Visagan.jpg" alt="" />
        <h5>Visagan S</h5>
      </div>
    </div>
    <h6>Coordinator(s) - Events</h6>
    <div class="row flex jcse">
      <div class="card flex aic jcc fdc">
        <img src="./assets/img/ob/Renuga.jpg" alt="" />
        <h5>Renuga S</h5>
      </div>
      <div class="card flex aic jcc fdc">
        <img src="./assets/img/ob/Dinesh.jpg" alt="" />
        <h5>Dinesh Kumar S</h5>
      </div>
    </div>
    <div class="row flex jcse">
      <div class="card flex aic jcc fdc">
        <h6>Sponsorship</h6>
        <img src="./assets/img/ob/Saravana.jpg" alt="" />
        <h5>Saravana Kumar J</h5>
      </div>
      <div class="card flex aic jcc fdc">
        <h6>Marketing</h6>
        <img src="./assets/img/ob/aravind.jpg" alt="" />
        <h5>Aravind N</h5>
      </div>
    </div>
    <h6>Hospitality</h6>
    <div class="row flex jcse">
      <div class="card flex aic jcc fdc">
        <img src="./assets/img/ob/A.K.Aiswariya.jpg" alt="" />
        <h5>Aiswariya A K</h5>
      </div>
      <div class="card flex aic jcc fdc">
        <img src="./assets/img/ob/SOUNDHARYA.jpg" alt="" />
        <h5>Soundharya R</h5>
      </div>
    </div>
    <div class="row flex jcse">
      <div class="card flex aic jcc fdc">
        <h6>Design</h6>
        <img src="./assets/img/ob/Bhuvan.jpg" alt="" />
        <h5>Bhuvan N</h5>
      </div>

    <!-- <div class="card flex aic jcc fdc">
                  <img src="./assets/img/ob/ob5.jpg" alt="" />
                  <h5>Yogeshwaran R</h5>
                  <h6>Design</h6>
                </div> -->
    
    <div class="card flex aic jcc fdc">
      <h6>Report</h6>
      <img src="./assets/img/ob/SharonF.jpg" alt="" />
      <h5>Sharon F</h5>
    </div>
    </div>
    <div class="row flex jcse">
      <div class="card flex aic jcc fdc">
        <h6>Alumni Relations</h6>
        <img src="./assets/img/ob/Susmitha.jpg" alt="" />
        <h5>Sushmitha AT</h5>
      </div>
    </div>
  </div>
  <br />
  <hr />
  <!-- <br style="color: white;"> -->
  <h4 style="margin-top:5rem">Technical Team</h4>
  <br />
  <div class="tech-team flex aic jcc">
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/AbishekCP.jpg" alt="" />
      <h5>Abishek C P</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/Visagan.jpg" alt="" />
      <h5>Visagan S</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/Pragathees.jpg" alt="" />
      <h5>Pragatheeswaran</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/Sherbin.jpeg" alt="" />
      <h5>Sherbin</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/HariVignesh.jpg" alt="" />
      <h5>Harivignesh</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/Maheshwararaj.jpg" alt="" />
      <h5>Maheshwararaj</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/KavyaS.jpg" alt="" />
      <h5>Kavya S</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/Malini.jpg" alt="" />
      <h5>Malini</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/Shalini.jpg" alt="" />
      <h5>Shalini</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/Kavya.jpg" alt="" />
      <h5>Kavya</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/ShreeDharshana.jpg" alt="" />
      <h5>Shree Dharsana</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/SOUNDHARYA.jpg" alt="" />
      <h5>Soundharya</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/A.K.Aiswariya.jpg" alt="" />
      <h5>Aiswariya A K</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/yogi.jpg" alt="" />
      <h5>Yogesh M</h5>
    </div>
    <div class="card flex aic jcc fdc">
      <img src="./assets/img/ob/Jayant.jpeg" alt="" />
      <h5>Jayant Kumar</h5>
    </div>
  </div>
  
</div>

<style>
  .pageRoot {
    min-height: 100vh;
    width: 100%;
    padding: 7.5rem 0;
  }
  h3 {
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
  }
  h4{
    margin-top: .5rem;
    font-size: 1rem;
  }
  h5{
    margin: .5rem 0;
    font-size: .9rem;
  }
  h6{
    font-size: .9rem;
    margin-top: 2rem;
    margin-bottom: .6rem;
  }

  .container {
    width: 80vw;
  }
  .row{
    flex-wrap: wrap;
  }
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
    color: white;
  }
  .block {
    margin-bottom: 20px;
  }
  .group > h4 {
    margin: 0 10px;
  }
  .card img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
  }

  .tech-team {
    flex-wrap: wrap;
    padding: 2rem;
  }

  .tech-team .card {
    margin: 2rem;
  }
  .tech-team .card img {
    width: 232px;
    height: 232px;
    border-radius: 50%;
  }
</style>
