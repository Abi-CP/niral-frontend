<script>
  let query = false;
  let collaborate = true;
  let screenWidth = window.innerWidth;
</script>

<div class="pageHolder">
  <div class="container flex">
    <div class="contact-Us">
      <h1>Contact-Us</h1>
      <div class="flex jcc">
        <div class="form-container">
          <div class="form-btn">
            <button
              on:click={() => {
                query = true;
                collaborate = false;
              }}>Query</button
            >
            <button
              on:click={() => {
                query = false;
                collaborate = true;
              }}>Collaborate</button
            >
            <hr
              id="indicator"
              style:transform={screenWidth > 899
                ? query
                  ? "translateX(68px)"
                  : "translateX(190px)"
                : query
                  ? "translateX(30px)"
                  : "translateX(155px)"}
            />
          </div>
          <div
            id="form-slider"
            style:transform={screenWidth > 899
              ? query
                ? "translateX(0%)"
                : "translateX(-100%)"
              : query
                ? "translateX(0%)"
                : "translateX(-100%)"}
          >
            <!-- Query -->

            <form id="query" name="query">
              <div class="input-field">
                <input
                  id="query-name"
                  type="text"
                  name="query-name"
                  required
                  autocomplete="on"
                />
                <label for="query-name">Name</label>
              </div>
              <div class="input-field">
                <input
                  id="query-mobile"
                  type="text"
                  name="query-mobile"
                  required
                  autocomplete="on"
                />
                <label for="query-mobile">Mobile No.</label>
              </div>
              <div class="input-field">
                <input
                  id="query-email"
                  type="text"
                  name="query-email"
                  required
                  autocomplete="on"
                />
                <label for="query-email">Email ID</label>
              </div>
              <div class="input-field">
                <textarea name="query" id="query" required></textarea>
                <label for="query-query">Your Message</label>
              </div>
              <input type="submit" class="btn" value="Submit" />
            </form>
            <!-- Collaboration -->
            <form id="collaborate" name="collaborate">
              <div class="input-field">
                <input
                  id="collaborate-name"
                  type="text"
                  name="collaborate-name"
                  required
                  autocomplete="on"
                />
                <label for="collaborate-name">Name</label>
              </div>
              <div class="input-field">
                <input
                  id="collaborate-mobile"
                  type="text"
                  name="collaborate-mobile"
                  required
                />
                <label for="collaborate-mobile">Mobile No.</label>
              </div>
              <div class="input-field">
                <input
                  id="collaborate-email"
                  type="text"
                  name="collaborate-email"
                  required
                  autocomplete="on"
                />
                <label for="collaborate-email">Email ID</label>
              </div>
              <div class="input-field">
                <input
                  id="collaborate-org"
                  type="text"
                  name="collaborate-org"
                  required
                  autocomplete="on"
                />
                <label for="collaborate-org">Organization Name</label>
              </div>
              <div class="input-field">
                <textarea name="collaborate" id="collaborate" required
                ></textarea>
                <label for="collaborate-collaborate">Your Message</label>
              </div>
              <input type="submit" class="btn" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="flex jcc">
      <div class="connect">
        <h1>Connect</h1>
        <div class="social">
          <div class="tooltip-containerFb">
            <!-- FB logo start-->
            <div class="textFb">
              <a class="iconFb" href="#"
                ><!-- FB link-->
                <div class="layerFb">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="facebookSVG">
                    <svg
                      viewBox="0 0 40 40"
                      xml:space="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
                        y2="407.5726"
                        y1="406.6018"
                        x2="-277.375"
                        x1="-277.375"
                        id="a"
                      >
                        <stop stop-color="#0062e0" offset="0"></stop>
                        <stop stop-color="#19afff" offset="1"></stop>
                      </linearGradient>
                      <path
                        d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                        fill="url(#a)"
                      ></path>
                      <path
                        d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <!-- FB logo end-->
          <div class="tooltip-containerGM">
            <!-- Gmail logo start-->
            <div class="textGM">
              <a class="iconGM" href="mailto:v.m.hari2002@gmail.com"
                ><!-- Gmail link-->
                <div class="layerGM">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fabGM">
                    <svg class="icon" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      ></path>
                      <path d="M1 1h22v22H1z" fill="none"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <!-- Gmail logo end-->
          <div class="tooltip-containerInsta">
            <!-- Insta logo start-->

            <div class="textInsta">
              <a class="iconInsta" href="#"
                ><!-- Insta link-->
                <div class="layerInsta">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="instagramSVG">
                    <svg
                      fill="white"
                      class="svgIcon"
                      viewBox="0 0 448 512"
                      height="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- Insta logo end-->
        <div class="container">
          <!-- map-->
          <div class="box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.6822884618757!2d80.2358727433386!3d13.012439964967879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a1dbf3955d%3A0xa2016d5a35abce76!2sDepartment%20of%20Information%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1715844974580!5m2!1sen!2sin"
              width="370"
              height="150"
              style="border: 20px;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="DIST - Map Location"
            ></iframe>
          </div>
        </div>
        <section class="accordion accordion--radio">
          <!-- Accordion-->
          <div class="tab">
            <input
              type="radio"
              name="accordion-2"
              id="rd1"
              checked
              class="rd"
            />
            <label for="rd1" class="tab__label">General Inquires</label>
            <div class="tab__content">
              <div class="member">
                <div class="memberName">asdffasdf</div>
                <!-- Name-->
                <div class="memberPhone">1232141</div>
                <!-- Phone number-->
              </div>
              <div class="member">
                <div class="memberName">asdffasdf</div>
                <div class="memberPhone">1232141</div>
              </div>
            </div>
          </div>
          <div class="tab">
            <input type="radio" name="accordion-2" id="rd2" class="rd" />
            <label for="rd2" class="tab__label"
              >Sponsership & Collaboration</label
            >
            <div class="tab__content">
              <div class="member">
                <div class="memberName">asdffasdf</div>
                <div class="memberPhone">1232141</div>
              </div>
              <div class="member">
                <div class="memberName">asdffasdf</div>
                <div class="memberPhone">1232141</div>
              </div>
            </div>
          </div>
          <div class="tab">
            <input type="radio" name="accordion-2" id="rd3" class="rd" />
            <label for="rd3" class="tab__label">Accomodations</label>
            <div class="tab__content">
              <div class="member">
                <div class="memberName">asdffasdf</div>
                <div class="memberPhone">1232141</div>
              </div>
              <div class="member">
                <div class="memberName">asdffasdf</div>
                <div class="memberPhone">1232141</div>
              </div>
            </div>
          </div>
          <div class="tab">
            <input type="radio" name="accordion-2" id="rd4" class="rd" />
            <label for="rd4" class="tab__close">Close open tab &times;</label>
          </div>
        </section>
        <!-- Accordion-->
      </div>
    </div>
  </div>
</div>

<style>
  .pageHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: 100dvh;
  width: calc(100vw - 4rem);
  width: calc(100dvw - 4rem);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 35, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(100%);
  border-radius: 1.5vh;
}

.connect, .contact-Us {
  justify-content: left;
  height: fit-content;
  margin: 30px;
}

h1 {
  margin-bottom: 10px;
  color: white;
}

.social {
  display: flex;
  justify-content: right;
  gap: 20px;
  margin-bottom: 20px;
}

.container {
  color: white;
  position: relative;
  font-family: sans-serif;
  margin-bottom: 20px;
}

.container .box {
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;
}

.container .box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container .box:hover {
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}

/* Fb design */
.tooltip-containerFb {
  height: fit-content;
  width: fit-content;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  border-radius: 10px;
}

.iconFb {
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative;
}

.iconFb .layerFb {
  width: 55px;
  height: 55px;
  border: 3px solid #1877f2;
  border-radius: 50%;
  transition: transform 0.3s, border 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 15px rgba(24, 119, 242, 0.7), 0 0 20px rgba(24, 119, 242, 0.5);
}

.iconFb:hover .layerFb {
  transform: rotate(-35deg) skew(20deg);
  box-shadow: 0 0 30px rgba(24, 119, 242, 1), 0 0 40px rgba(24, 119, 242, 0.7);
}

.layerFb span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 50%;
  transition: all 0.3s;
}

.layerFb span, .textFb {
  color: #1877f2;
  border-color: #1877f2;
}

.iconFb:hover .layerFb span {
  box-shadow: -1px 1px 3px #1877f2;
}

.iconFb:hover .layerFb span:nth-child(1) {
  opacity: 0.2;
}

.iconFb:hover .layerFb span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}

.iconFb:hover .layerFb span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}

.iconFb:hover .layerFb span:nth-child(4) {
  opacity: 0.8;
  transform: translate(15px, -15px);
}

.iconFb:hover .layerFb span:nth-child(5) {
  opacity: 1;
  transform: translate(20px, -20px);
}

.facebookSVG {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1877f2;
  border-radius: 50%;
  background: linear-gradient(45deg, #1877f2 0%, #3b5998 25%, #1877f2 50%, #3b5998 75%, #1877f2 100%);
}

/* GMail design */
.tooltip-containerGM {
  height: fit-content;
  width: fit-content;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  border-radius: 10px;
}

.iconGM {
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative;
}

.layerGM {
  width: 55px;
  height: 55px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.7), 0 0 20px rgba(83, 129, 189, 0.5);
  transition: transform 0.3s;
}

.iconGM:hover .layerGM {
  transform: rotate(-35deg) skew(20deg);
}

.layerGM span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 5px;
  transition: all 0.3s;
}

.layerGM span, .textGM {
  color: #1da1f2;
  border-color: #1da1f2;
}

.iconGM:hover .layerGM span:nth-child(1) {
  opacity: 0.2;
}

.iconGM:hover .layerGM span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}

.iconGM:hover .layerGM span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}

.iconGM:hover .layerGM span:nth-child(4) {
  opacity: 0.8;
  transform: translate(15px, -15px);
}

.iconGM:hover .layerGM span:nth-child(5) {
  opacity: 1;
  transform: translate(20px, -20px);
}

.layerGM span.fabGM {
  font-size: 30px;
  line-height: 64px;
  text-align: center;
  fill: #1da1f2;
  background: #ffffff;
}

/* Insta design */
.tooltip-containerInsta {
  height: fit-content;
  width: fit-content;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  border-radius: 10px;
}

.iconInsta {
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative;
}

.layerInsta {
  width: 55px;
  height: 55px;
  border: 3px solid #c40f8d;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(242, 24, 151, 0.7), 0 0 20px rgba(24, 119, 242, 0.5);
  transition: transform 0.3s;
}

.iconInsta:hover .layerInsta {
  transform: rotate(-35deg) skew(20deg);
}

.layerInsta span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 15px;
  transition: all 0.3s;
}

.layerInsta span, .textInsta {
  color: #e6683c;
  border-color: #e6683c;
}

.iconInsta:hover .layerInsta span:nth-child(1) {
  opacity: 0.2;
}

.iconInsta:hover .layerInsta span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}

.iconInsta:hover .layerInsta span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}

.iconInsta:hover .layerInsta span:nth-child(4) {
  opacity: 0.8;
  transform: translate(15px, -15px);
}

.iconInsta:hover .layerInsta span:nth-child(5) {
  opacity: 1;
  transform: translate(20px, -20px);
}

.instagramSVG {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

/* Accordion menu */
.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.tab__content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.35s;
}

.tab input:checked ~ .tab__content {
  max-height: 10rem;
}

.tab:has(input:checked) {
  background-color: rgba(255, 255, 255, 0.074);
}

.tab:has(input:checked) label {
  color: burlywood;
}

.accordion {
  overflow: hidden;
}

.tab {
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
}

.tab:hover {
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}

.tab__label, .tab__close {
  display: flex;
  color: white;
  cursor: pointer;
}

.tab__label {
  justify-content: space-between;
  padding: 1rem;
}

.tab__label::after {
  content: "\276F";
  width: 1em;
  height: 1em;
  text-align: center;
  transform: rotate(90deg);
  transition: all 0.35s;
}

.tab input:checked + .tab__label::after {
  transform: rotate(270deg);
}

.member {
  display: flex;
  margin: 20px;
  color: white;
}

.memberName {
  margin-right: 10px;
}

.memberPhone {
  text-decoration: underline;
  color: #1877f2;
}

.tab__close {
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
}

/* Arrow animation */
.tab input:not(:checked) + .tab__label:hover::after {
  animation: bounce 0.5s infinite;
}

@keyframes bounce {
  25% {
    transform: rotate(90deg) translate(0.25rem);
  }
  75% {
    transform: rotate(90deg) translate(-0.25rem);
  }
}

/* Queries */
:root {
  --txt-color: #f0f0f0;
}

.form-container {
  margin-top: 2.5rem;
  color: var(--txt-color);
  box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.438);
  padding: 20px 0;
  width: 400px;
  height: fit-content;
  overflow: hidden;
  backdrop-filter: blur(16px) saturate(150%);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

#form-slider {
  display: flex;
  transition: 0.4s linear;
}

.form-btn {
  text-align: center;
}

.form-btn button {
  color: #fff;
  border: none;
  background: none;
  display: inline-block;
  width: 120px;
  font-size: 20px;
  cursor: pointer;
  font-weight: 400;
}

hr {
  width: 120px;
  border: none;
  transition: 0.4s;
  background: var(--txt-color);
  height: 2px;
  margin: 10px;
  transform: translateX(68px);
}

form {
  margin: 20px;
}

.input-field {
  width: 360px;
  position: relative;
  margin: 10px 0px 35px;
}

.input-field label {
  color: var(--txt-color);
  font-size: 1.1em;
  font-weight: 500;
  text-transform: capitalize;
  position: absolute;
  top: 0;
  z-index: 1;
  transition: 0.45s;
  pointer-events: none;
}

.input-field input:focus ~ label,
.input-field input:valid ~ label,
.input-field textarea:valid ~ label,
.input-field textarea:focus ~ label {
  transform: translateY(-20px);
  font-size: 0.9em;
  padding: 0;
}

input, textarea {
  color: var(--txt-color);
  font-size: 1rem;
  display: block;
  padding: 5px 0px;
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid var(--txt-color);
  outline: none;
  z-index: 2;
  font-weight: 500;
}

textarea {
  resize: vertical;
  max-width: 360px;
  min-width: 360px;
}

.btn {
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
  text-shadow: none;
  background: transparent;
  cursor: pointer;
  box-shadow: transparent;
  border: 1px solid #ffffff80;
  transition: 0.5s ease;
  user-select: none;
}

.btn:hover, .btn:focus {
  color: #ffffff;
  background: #008cff;
  border: 1px solid #008cff;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;
}

@media screen and (max-width: 900px) {
  .pageHolder {
    display: block;
  }

  .container {
    flex-direction: column;
    margin: 0 !important;
  }

  .connect .container .box {
    width: 100%;
    margin-bottom: 0.7rem;
    padding: 0;
  }

  .connect .container .box iframe {
    border-radius: 10px;
    width: 400px;
  }
}

@media screen and (max-width: 900px) {
  .pageHolder {
    width: 100%;
  }

  .form-container {
    width: 328px;
    padding-left: 7px;
  }

  form#query, form#collaborate {
    width: 280px;
  }

  .input-field {
    width: auto;
  }

  textarea {
    min-width: 280px;
    max-width: 280px;
    width: 280px;
  }

  .connect .container .box iframe {
    border-radius: 10px;
    width: 328px;
  }
}
</style>