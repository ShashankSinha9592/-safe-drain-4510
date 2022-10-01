import { navbar } from "./components/navbar.js";
const nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

import { sort, last, footer } from "./components/footer.js";
const sort_div = document.getElementById("container");
sort_div.innerHTML = sort();
footer();

const last_div = document.getElementById("last_portion");
last_div.innerHTML = last();

let heading_div = document.querySelector(".heading");
heading_div.addEventListener("click", () => {
  window.location.href = "index.html";
});

document.querySelector(".price").addEventListener("click", () => {
  window.location.href = "https://coschedule.com/pricing";
});

document.querySelector(".go").addEventListener("click", () => {
  window.location.href = "./login.html";
});

document.querySelector(".demo").addEventListener("click", () => {
  window.location.href = "https://coschedule.com/product-demo";
});

document.querySelector(".calendar").addEventListener("click", () => {
  window.location.href = "https://coschedule.com/signup";
});


// navbar.html me line no.27
let start_btn = document.getElementById("start");
start_btn.addEventListener("click", () => {
  window.location.href = "./signup.html";
});
// end

// navbar =.html me line no.86 page marketing calendar
document.querySelector(".btn").addEventListener("click", () => {
  window.location.href = "./marketing_calander.html";
});
// end

// navabr.html me line no. 112  marketing Suite
document.querySelector(".btn1").addEventListener("click", () => {
  window.location.href = "./marketing_suite.html";
});
// end

// navbar.html me line no. 140 page  headline studio
document.querySelector(".btn2").addEventListener("click", () => {
  window.location.href = "./headline_studio.html";
});

// navbar.html me line no.166 page Actionable Marketing Institute
document.querySelector(".btn3").addEventListener("click", () => {
  window.location.href =
    "./actionable_marketing.html";
});

document.querySelector(".chart").addEventListener("click", () => {
  window.location.href =
    "https://coschedule.com/press/coschedule-featured-on-2022-gartner-magic-quadrant-for-content-marketing-platforms";
});

document.querySelector(".size").addEventListener("click", () => {
  window.location.href =
    "https://coschedule.com/press/coschedule-remains-on-inc-5000-list-for-third-consecutive-year";
});

let get_btn = document.getElementById("get");
get_btn.addEventListener("click", () => {
  window.location.href = "./signup.html";
});

let sign_div = document.getElementById("sign");
sign_div.addEventListener("click", () => {
  window.location.href = "https://coschedule.com/signup";
});

let request_div = document.getElementById("request");
request_div.addEventListener("click", () => {
  window.location.href = "https://coschedule.com/product-demo";
});

let sign_in_div = document.getElementById("sign_in");
sign_in_div.addEventListener("click", () => {
  window.location.href = "https://accounts.coschedule.com/login";
});

document.querySelector(".insta").addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/coschedule/";
});

document.querySelector(".linke").addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/company/coschedule";
});

document.querySelector(".twitt").addEventListener("click", () => {
  window.location.href = "https://twitter.com/coschedule";
});

document.querySelector(".fac").addEventListener("click", () => {
  window.location.href = "https://www.facebook.com/coschedule";
});
