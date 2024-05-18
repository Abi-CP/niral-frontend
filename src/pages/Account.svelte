<!-- Account.svelte -->
<script>
    // Add any necessary script logic here

  import RegistrationForm from "../components/RegistrationForm.svelte";



  let regFields={
    editable:false
  }
  </script>
  
  <h1>Account Page</h1>
  <div class="wrapper">
    <div class="container">
      <input type="radio" name="slide" id="c1" checked>
      <label for="c1" class="card">
        <div class="row">
          <div class="icon">1</div>
          <div class="title">
            <h4>Details</h4>
            <div class="pHolder">
             <div class="content-wrapper">
              <RegistrationForm {regFields}/>
             </div>
            </div>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c2">
      <label for="c2" class="card">
        <div class="row">
          <div class="icon">2</div>
          <div class="title">
            <h4>My Events</h4>
            <div class="pHolder">
              <p>Gets better every day - stay tuned</p>
              <p>Gets better every day - stay tuned</p>
            </div>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c3">
      <label for="c3" class="card">
        <div class="row">
          <div class="icon">3</div>
          <div class="title">
            <h4>My Permits</h4>
            <div class="pHolder">
              <p>Help people all over the world</p>
            </div>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c4">
      <label for="c4" class="card">
        <div class="row">
          <div class="icon">4</div>
          <div class="title">
            <h4>Payment History</h4>
            <div class="pHolder">
              <p>Space engineering becomes more and more advanced</p>
              <p>Space engineering becomes more and more advanced</p>
              <p>Space engineering becomes more and more advanced</p>
            </div>
          </div>
        </div>
      </label>
    </div>
  </div>
  
  <style>
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .container {
      width: 60vw;
      /* max-width: calc(640px + 10vw); */
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
    }
  
    .card {
      width: 60vw;
      /* max-width: calc(640px + 10vw); */
      height: 60px;
      cursor: pointer;
      overflow: hidden;
      border-radius: 2rem;
      margin: 0 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: .3s cubic-bezier(.28,-0.03,0,.99);
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 35, 0.37);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px) saturate(120%);
      -webkit-backdrop-filter: blur(10px) saturate(100%);
    }
  
    .card > .row {
      color: white;
      display: flex;
      justify-content: flex-start;
      gap: 20px;
      flex-wrap: nowrap;
      padding: 5px;
    }
  
    .card > .row > .icon {
      background: #11111180;
      color: white;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .card > .row > .title {
      display: flex;
      /* justify-content: flex-start; */
      flex-direction: column;
      width: 52vw;
      /* width: 450px; */
    }
  
    .title h4 {
      margin: .75rem 0 2rem;
      color: #b0b0ba;
      text-transform: uppercase;
    }
  
    .title .pHolder {
      background: rgba(0, 0, 0, 0);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 35, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 1.5vh;
      padding: 0 20px; 
      margin: 20px 0;
      /* display: flex;
    justify-content: center; */
    }
  
    .title p {
      color: #b0b0ba;
      text-align: justify;
    }
  
    input {
      display: none;
    }
  
    /* input:checked + .title {
      align-items: center;
    } */
  
    input:checked + .card {
      height: auto;
      padding: 5px;
    }
  
    input:checked + label .title h4 {
      font-size: 1.4rem;
      color: #149CEA;
      margin: .5rem 0 0 0;
    }
  
    @media (max-width: 767px) {
      .container {
        width: 75vw;
      }
  
      .card > .row {
        gap: 10px;
      }
  
      .card > .row > .title {
        width: 75vw;
      }
  
      input:checked + label {
        width: 85vw;
      }
  
     

      .title .pHolder {
        transform: translateX(-50px);
      }
    }
  
    @media (max-width: 300px) {
      .title h4 {
        font-size: 0.85rem;
        overflow: scroll;
      }
  
      .title .pHolder {
        font-size: 0.7rem;
        overflow: scroll;
      }
  
      input:checked + label .title h4 {
        font-size: 0.8rem;
      }
    }
  </style>
  