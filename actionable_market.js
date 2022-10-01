let data = [
  {
    img: "https://media.coschedule.com/uploads/2020/09/2020-Academy-Course-Cards_Marketing-Idea.png",
    head: "Marketing Ideas",
    para: "Learn how to consistently come up with new marketing ideas that generate results. Stop wasting your time on work that doesn’t matter.",
  },

  {
    img: "https://media.coschedule.com/uploads/2020/09/2020-Academy-Course-Cards_Marketing-Strategy.png",
    head: "Marketing Strategy",
    para: "Become a better marketer & level up your results. Become Marketing Strategy Certified today.",
  },
  {
    img: "https://media.coschedule.com/uploads/2020/09/2020-Academy-Course-Cards_Social-Media-Strategy.png",
    head: "Social Media Strategy",
    para: "Plan your entire social strategy in just two weeks and become Social Media Certified.",
  },
  {
    img: "https://media.coschedule.com/uploads/2020/09/2020-Academy-Course-Cards_10x-Marketing-Formula.png",
    head: "10X Marketing Formula",
    para: "Learn how to apply core frameworks from the 10x Marketing Formula.",
  },
];

data.forEach((el) => {
  let div = document.createElement("div");

  let img1 = document.createElement("img");
  img1.src = el.img;

  let h3 = document.createElement("h3");
  h3.innerText = el.head;

  let p = document.createElement("p");
  p.innerText = el.para;

  div.append(img1, h3, p);

  document.getElementById("sec-4").append(div);
});

let images = [
  "https://media.coschedule.com/uploads/2020/09/entrepreneur-logo.png",
  "https://media.coschedule.com/uploads/2020/09/forbes-logo.png",
  "https://media.coschedule.com/uploads/2020/09/inc-logo.png",
  "https://media.coschedule.com/uploads/2020/09/techweek-logo-small.png",
  "https://media.coschedule.com/uploads/2020/09/convince-convert-logo.png",
  "https://media.coschedule.com/uploads/2020/09/mp-logo-01.png",
  "https://media.coschedule.com/uploads/2020/09/usa-today-logo-02.png",
  "https://media.coschedule.com/uploads/2020/09/sej-logo-01.png",
  "https://media.coschedule.com/uploads/2020/09/adweek-logo-svg-white-02.png",
  "https://media.coschedule.com/uploads/2020/09/moz-logo-02.png",
  "https://media.coschedule.com/uploads/2020/09/copyblogger-logo.png",
  "https://media.coschedule.com/uploads/2020/09/content-marketing-institute-logo.png",
];

images.forEach((e) => {
  let img = document.createElement("img");
  img.src = e;

  document.getElementById("sec-5").append(img);
});
