
// const start =()=>{
//   window.location.href="https://coschedule.com/signup"
// }

// let footerArr = [
//   {
//     heading: "Products",
//     items: [
//       "Marketing Calender",
//       "Marketing Suite",
//       "Headeline Studio",
//       "Actionable Marketing Institute",
//     ],
//   },

//   {
//     heading: "WHY COSCHEDULE",
//     items: ["Customer Stories", "Support", "Product Announcements", "Pricing"],
//   },
//   {
//     heading: "COMPANY",
//     items: ["About", "Jobs", "Press", "Contact US", "Afflicate Program"],
//   },
//   {
//     heading: "RESOURCES",
//     items: [
//       "Marketing Blog",
//       "CoSchedule Guide",
//       "Marketing Strategy Report",
//       "Agile Marketing Guide",
//       "Actionable Marketing Podcast",
//       "10x Marketing Formula Book",
//       "Get Started With Agile Marketing Guide",
//     ],
//   },
//   {
//     heading: "TOPIC LIBRARIES",
//     items: [
//       "Marketing",
//       "Marketing Ideas",
//       "Marketing Strategy",
//       "Content Marketing",
//     ],
//   },
//   {
//     heading: "TOOLS",
//     items: [
//       "Headline Analyzer",
//       "Email Subject Line Tester",
//       "Social Message Optimizer",
//       "Marketing Dictionary",
//     ],
//   },
// ];

// localStorage.setItem("footers", JSON.stringify(footerArr));

// footerApply = JSON.parse(localStorage.getItem("footers"));

// const display = (footerApply) => {
//   let sideRhs_div = document.getElementById("sideRhs");
//   sideRhs_div.innerText = null;

//   footerApply.forEach((el) => {
//     let div = document.createElement("div");
//     let heading = document.createElement("h3");
//     heading.innerText = el.heading;

//     div.append(heading);

//     el.items.forEach((each) => {
//       let item = document.createElement("div");
//       item.innerText = each;

//       div.append(item);
//     });
//     sideRhs_div.append(div);
//   });
// };
// display(footerApply);
