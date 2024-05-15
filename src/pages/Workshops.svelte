<div class="wrapper">
  <div class="container">
      <input type="radio" name="slide" id="c1" checked>
      <label for="c1" class="card" style="--image: url('./winter.jpeg')">
          <div class="row">
              <div class="icon">1</div>
              <div class="title">
                  <h4>Winter</h4>
                  <div class="pHolder">
                      <p>Winter has so much to offer - creative activities Winter has so much to offer - creative activities</p>
                      <p>Winter has so much to offer - creative activities Winter has so much to offer - creative activities Winter has so much to offer - creative activities</p>
                      <p>Winter has so much to offer - creative activities Winter has so much to offer - creative activities</p>
                      <p>Winter has so much to offer - creative activities</p>
                  </div>
              </div>
          </div>
      </label>
      <input type="radio" name="slide" id="c2" >
      <label for="c2" class="card" style="--image: url('./digital.jpeg')">
          <div class="row">
              <div class="icon">2</div>
              <div class="title">
                  <h4>Digital Technology</h4>
                  <div class="pHolder">
                      <p>Gets better every day - stay tuned</p>
                      <p>Gets better every day - stay tuned</p>
                  </div>
              </div>
          </div>
      </label>
      <input type="radio" name="slide" id="c3" >
      <label for="c3" class="card" style="--image: url('./global.jpeg')">
          <div class="row">
              <div class="icon">3</div>
              <div class="title">
                  <h4>Globalization</h4>
                  <div class="pHolder">
                      <p>Help people all over the world</p>
                  </div>
              </div>
          </div>
      </label>
      <input type="radio" name="slide" id="c4" >
      <label for="c4" class="card" style="--image: url('./space.jpeg')">
          <div class="row">
              <div class="icon">4</div>
              <div class="title">
                  <h4>New technologies</h4>
                  <div class="pHolder">
                      <p>Space engineering becomes more and more advanced</p>
                      <p>Space engineering becomes more and more advanced Space engineering becomes more and more advanced</p>
                      <p>Space engineering becomes more and more advanced</p>
                  </div>
              </div>
          </div>
      </label>
  </div>
</div>

<style>
  
.pageHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 96%;
    height: 99%;
    min-width: fit-content;
    padding: 0% 2%;
    background: rgba( 0, 0, 0, 0.4 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 35, 0.37 );
    border: 1px solid rgba( 255, 255, 255, 0.1 );
    backdrop-filter: blur( 10px ) saturate(120%);
    -webkit-backdrop-filter: blur( 10px ) saturate(100%);
    border-radius: 1.5vh;
}

.btwArrows {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0% 3%;
}

.threeButtons {
    display: flex;
    position: absolute;
    width: 99%;
    height: 0;
    top: 5px;
    margin-left: px;
}

.emptyDiv { /* for top register button in desktops and orientation/margin fix for circles */
    width: 57%;
  }

.circles {
    height: 30px;
    display: flex;
    width: 20%;
    gap: 8px;
    padding: 10px;
  }
  
  .c {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: inset 2px 2px 5px rgba(235, 235, 235, 0.356);
  }
  
  .c:first-child {
    background-color: red;
  }
  
  .c:nth-child(2) {
    background-color: rgb(204, 167, 4);
  }
  
  .c:last-child {
    background-color: green;
  }

.subHolder {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0% 4%;
}

.niral {
    width: 100%;
    height: 25%;
    text-align: start;
    font-size: 4rem;
    color: #149CEA;
}

.title {
    height: 15%;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    gap: 5%;
    margin-top: 3%;
}

.contentSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
}

.contentHolder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90%;
    gap: 3%;
}

.content {
    width: 55%;
    height: 100%;
    background: rgba( 0, 0, 0, 0 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 35, 0.3 );
    border: 1px solid rgba( 255, 255, 255, 0.1 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 1.5vh;
}

.contentDetails {
    padding: 4%;
    width: 90%;
    height: 70%;
    color: white;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none; 
}

.contentDetails::-webkit-scrollbar {
    display: none;
}

.pic {
    width: 50vh;
    height: 50vh;
    border-radius: 1.5vh;
}

img {
    width: 50vh;
    height: 50vh;
    object-fit: cover;
    border-radius: 1.5vh;
}
  
  .arrowButton {
    width: 3.5em;
    position: relative;
    height: 3.5em;
    border: none;
    outline: none;
    background-color: transparent;
    color: #149CEA;
    transition: 1s;
    border-radius: 2em;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .arrowButton::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #00000000;
    transition: 0.5s;
    transform-origin: center;
  }
  
  .arrowButton::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #00000000;
    transition: 0.5s;
  }
  
  .arrowButton:hover::before,   .titleButton:hover::after {
    transform: scale(0)
  }
  
  .arrowButton:hover {
    box-shadow: inset 0px 0px 25px #1479EA;
  }

.navHolder {
    display: flex;
    /* justify-content: center; */
    width: 100%;
    height: 15%;
} 

.navButton {
    width: auto;
    height: auto;
    font-size: 1.0rem;
    color: #fff;
    cursor: pointer;
    position: relative;
    border: none;
    margin: 0% 2.5%;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }
  
  .navButton:focus,
  .navButton:hover {
    color: #fff;
  }
  
  .navButton:focus:after,
  .navButton:hover:after {

    width: 100%;
    left: 0%;
  }
  
  .navButton:after {
    content: "";
    pointer-events: none;
    bottom: 15px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 3px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }

.regButton {
    position: relative;
    overflow: hidden;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: #3d3a4e99;
    background-size: 400%;
    color: #fff;
    border: none;
    cursor: pointer;
    margin: 3% 3%;
  }
  
  .regButton:hover::before {
    transform: scaleX(1);
  }
  
  .regButton-content {
    position: relative;
    z-index: 1;
  }
  
  .regButton::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgba(150, 93, 233, 1) 10.8%,
      rgba(99, 88, 238, 1) 94.3%
    );
    transition: all 0.475s;
  }
  
@media (max-width: 767px) {
    body {
        margin: 4%;
        background-size:contain;
    }

    .pageHolder{
        height: max-content;
    }

    .subHolder {
        height: max-content;
        align-items: center;
    }
    .title {
        height: 10%;
    }
    .niral {
        font-size: 3rem;
        text-align: center;  /* Title in centre for mobile, Disable to use defaul: tilte in left*/
    }

    .section {
        height: max-content;
    }

    .contentHolder {
        height: max-content;
        margin: 0;
        flex-direction: column-reverse;
        gap: 5vh;
    }

    .contentDetails {
        height: 75%;
    }

    .content {
        margin: 0;
        width: 76vw;
        height: 60vh;
        max-height: fit-content;
    }

    .pic {
        margin: 0;
        margin-right: 0;
        width: 76vw;
        height: 76vw;
    }
    img {
        width: 76vw;
        height: 76vw;
        object-fit: cover;
    }

    .arrowButton {
        display: none;
    }

    #regTop {
        display: none;
    }

    #regDown {
        margin-top: 5vh;
        margin-bottom: 5vh;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    body {
        margin: 4%;
        background-size:contain;
    }

    .pageHolder{
        height: max-content;
    }

    .subHolder {
        height: max-content;
        align-items: center;
    }
    .title {
        height: 10%;
    }
    .niral {
        font-size: 3rem;
        text-align: center;  /* Title in centre for tables, Disable to use defaul: tilte in left*/
    }

    .section {
        height: max-content;
    }

    .contentHolder {
        height: max-content;
        margin: 0;
        flex-direction: column-reverse;
        gap: 5vh;
    }

    .content {
        margin: 0;
        width: 76vw;
        height: 60vh;
        max-height: fit-content;
    }

    .pic {
        margin: 0;
        margin-right: 0;
        width: 76vw;
        height: 76vw;
    }
    img {
        width: 76vw;
        height: 76vw;
        object-fit: cover;
    }

    .arrowButton {
        display: none;
    }

    #regTop {
        display: none;
    }

    #regDown {
        margin-top: 5vh;
        margin-bottom: 5vh;
    }
}

@media (min-width: 1025px) {
    #regDown {
        display: none;
    }
}

@media (max-width: 400px) {
    .navButton {
        font-size: 0.7rem;
    }
}

@media (max-width: 300px) {
    .navButton {
        font-size: 0.6rem;
    }
}
  
</style>