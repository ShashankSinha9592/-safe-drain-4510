import { organize } from "./components/organise.js";

document.querySelector("#organizers").innerHTML = organize();
document.querySelector("#navorganize").innerHTML = organize();

let explore = document.querySelector("#explore");
explore.addEventListener("mouseover", (e) => {
  e.preventDefault();
  if (document.querySelector("#navorganize").style.display == "flex") {
    document.querySelector("#navorganize").style.display = "none";
  } else {
    document.querySelector("#navorganize").style.display = "flex";
  }
});

let btn = document.querySelectorAll("#left button");
console.log(btn);
// let val = document.querySelector(".");
btn.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.innerText == "-" && el.nextElementSibling.innerText != 0) {
      el.nextElementSibling.innerText--;
    } else if (
      e.target.innerText != "Calculate Your Savings" &&
      e.target.innerText == "+"
    ) {
      el.previousElementSibling.innerText++;
    }
  });
});
