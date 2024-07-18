<script>
  import { onMount } from "svelte";
  import { serverUrl } from "../../public/env";
  import ContactCard from "../utils/ContactCard100.svelte";
  import { showToast } from "../lib/toast";

  let query = true;
  let collaborate = false;
  let screenWidth = window.innerWidth;

  let img;

  let name 
  let email
  let mobile 
  let org
  let message 

  onMount(async () => {
    img = new Image();
    img.src = "../assets/gif/gradient3.gif";
    img.onload = () => {
      const bgAnimImg = document.querySelector(".bgAnim img");
      if (bgAnimImg instanceof HTMLImageElement) {
        bgAnimImg.src = img.src;
      }
    };
  });

  const handleSubmit = async () => {
    // Validate form fields
    if (!name || !email || !mobile || (collaborate && !org) || !message) {
      showToast("error", "Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(`${serverUrl}/contact-form/${query ? "query" : "collaborate"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, mobile, org, message }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        if (responseData.errorMessage) {
          showToast("error", responseData.errorMessage);
        } else {
          showToast("error", "An error occurred. Contact support.");
        }
      } else {
        showToast("success", "Message sent successfully");
        name = email = mobile = org = message = "";
      }
    } catch (error) {
      console.log("Error during contact form submission: ", error);
      showToast("error", "An error occurred. Contact support.");
    }
  };
</script>

<div class="bgAnim">
  <img src="" alt="" srcset="" />
</div>
<div class="bgBlur"></div>

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
                  bind:value={name}
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
                  bind:value={mobile}
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
                  bind:value={email}
                />
                <label for="query-email">Email ID</label>
              </div>
              <div class="input-field">
                <textarea name="query" id="query" required bind:value={message}
                ></textarea>
                <label for="query-query">Your Message</label>
              </div>
              <input
                type="submit"
                class="btn"
                value="Submit"
                on:click|preventDefault={handleSubmit}
              />
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
                  bind:value={name}
                />
                <label for="collaborate-name">Name</label>
              </div>
              <div class="input-field">
                <input
                  id="collaborate-mobile"
                  type="text"
                  name="collaborate-mobile"
                  required
                  bind:value={mobile}
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
                  bind:value={email}
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
                  bind:value={org}
                />
                <label for="collaborate-org">Organization Name</label>
              </div>
              <div class="input-field">
                <textarea
                  name="collaborate"
                  id="collaborate"
                  required
                  bind:value={message}
                ></textarea>
                <label for="collaborate-collaborate">Your Message</label>
              </div>
              <input type="submit" class="btn" value="Submit" on:click|preventDefault={handleSubmit}/>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="flex jcc">
      <div class="connect">
        <h1>Connect</h1>
        <div class="social">
          <!-- FB logo start-->
          <!-- <div class="tooltip-containerFb">
            <div class="textFb">
              <a class="iconFb" href="#"
                >
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
          </div> -->
          <!-- FB logo end-->
          <div class="tooltip-containerGM">
            <!-- Gmail logo start-->
            <div class="textGM">
              <a class="iconGM" href="mailto:cegniral@gmail.com"
                ><!-- Gmail link-->
                <div class="layerGM">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fabGM">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"/><path fill="#d9d9d9" d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"/><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"/><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"/><path fill="#ca3737" d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"/><path fill="#f5f5f5" d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"/><path fill="#e84f4b" d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"/></svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <!-- Gmail logo end-->
          <div class="tooltip-containerInsta">
            <!-- Insta logo start-->

            <div class="textInsta">
              <a class="iconInsta" href="https://www.instagram.com/niralceg/"
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
                <ContactCard
                  name={"Karthik Narendren"}
                  phone={"+91 75502 10518"}
                />
              </div>
              <div class="member">
                <ContactCard name={"Aiswariya"} phone={"+91 6369 765 738"} />
              </div>
              <div class="member">
                <ContactCard name={"Soundharya"} phone={"+91 82705 96210"} />
              </div>
            </div>
          </div>
          <div class="tab">
            <input type="radio" name="accordion-2" id="rd2" class="rd" />
            <label for="rd2" class="tab__label"
              >Sponsorship & Collaboration</label
            >
            <div class="tab__content">
              <div class="member">
                <ContactCard name={"Naveen"} phone={"+91 79043 74673"} />
              </div>
              <div class="member">
                <ContactCard
                  name={"Saravana Kumar"}
                  phone={"+91 75300 21670"}
                />
              </div>
            </div>
          </div>
          <div class="tab">
            <input type="radio" name="accordion-2" id="rd3" class="rd" />
            <label for="rd3" class="tab__label">Accomodations</label>
            <div class="tab__content">
              <div class="member">
                <ContactCard name={"Aiswariya"} phone={"+91 6369 765 738"} />
              </div>
              <div class="member">
                <ContactCard name={"Soundharya"} phone={"+91 82705 96210"} />
              </div>
            </div>
          </div>
          <div class="tab">
            <input
              type="radio"
              name="accordion-2"
              id="rd4"
              class="rd"
              checked
            />
            <label for="rd4" class="tab__close">Close open tab &times;</label>
          </div>
        </section>
        <!-- Accordion-->
      </div>
    </div>
  </div>
</div>

<style>
  .bgAnim {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    height: 100dvh;
    width: 100%;
    z-index: -10;
  }
  .bgAnim img {
    width: 100%;
    height: 100vh;
  }
  .bgBlur {
    position: fixed;
    overflow-x: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    z-index: -9;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
  }
  .pageHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 100dvh;
    width: 100%;
    width: calc(100dvw - 4rem);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 35, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.1);
    /* backdrop-filter: blur(10px) saturate(120%);
    -webkit-backdrop-filter: blur(10px) saturate(100%); */
    border-radius: 1.5vh;
  }

  .connect,
  .contact-Us {
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
    transition:
      transform 0.3s,
      border 0.3s ease,
      box-shadow 0.3s ease;
    box-shadow:
      0 0 15px rgba(24, 119, 242, 0.7),
      0 0 20px rgba(24, 119, 242, 0.5);
  }

  .iconFb:hover .layerFb {
    transform: rotate(-35deg) skew(20deg);
    box-shadow:
      0 0 30px rgba(24, 119, 242, 1),
      0 0 40px rgba(24, 119, 242, 0.7);
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

  .layerFb span,
  .textFb {
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
    background: linear-gradient(
      45deg,
      #1877f2 0%,
      #3b5998 25%,
      #1877f2 50%,
      #3b5998 75%,
      #1877f2 100%
    );
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
    box-shadow:
      0 0 15px rgba(255, 255, 255, 0.7),
      0 0 20px rgba(83, 129, 189, 0.5);
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

  .layerGM span,
  .textGM {
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
    line-height: 74px;
    text-align: center;
    fill: #1da1f2;
    background: #ffffff;
    padding-top: 3px;
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
    box-shadow:
      0 0 15px rgba(242, 24, 151, 0.7),
      0 0 20px rgba(24, 119, 242, 0.5);
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

  .layerInsta span,
  .textInsta {
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
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
  }

  /* Accordion menu */
  .tab input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .tab__content {
    max-height: 0;
    overflow: auto;
    transition: all 0.35s;
  }

  .tab input:checked ~ .tab__content {
    max-height: 25rem;
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

  .tab__label,
  .tab__close {
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

  input,
  textarea {
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

  .btn:hover,
  .btn:focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow:
      0 0 5px #ffffff,
      0 0 10px #ffffff,
      0 0 20px #ffffff;
    box-shadow:
      0 0 5px #008cff,
      0 0 20px #008cff,
      0 0 50px #008cff,
      0 0 100px #008cff;
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

    form#query,
    form#collaborate {
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
