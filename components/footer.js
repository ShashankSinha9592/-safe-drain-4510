const sort=()=>{
    return` <div id="sidelhs">
    <a href="./navbar.html"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07cEZ5wJoqGfCPJ1t0MDVSTRBagFtQssIabCrGxA&s" alt=""></a>
   
    <p id="sign">Sign Up</p>
    <p id="request">Request A Demo</p>
    <p id="sign_in">Sign In</p>
    <div>
        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=96&q=75" alt="">
       <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fgartner-badge.png&w=64&q=75" alt="">
      <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-badge.png&w=48&q=75" alt="">
    </div>
</div>

<div id="sideRhs"></div>`
}
const last =()=>{
    return ` <div>
    <P>© Copyright 2022, all rights reserved. See our Terms & Policies</P>
 </div>
 <div>
    <span class="insta"><i class="fa-brands fa-instagram"></i></span>
    <span class="linke"><i class="fa-brands fa-linkedin"></i></span>
    <span class="twitt"><i class="fa-brands fa-twitter"></i></span>
    <span class="fac"><i class="fa-brands fa-facebook"></i></span>
 </div>`
}
export {sort,last, footer}

const footer =()=>{
    let footerArr = [
        {
          heading: "Products",
          items: [
            "Marketing Calender",
            "Marketing Suite",
            "Headeline Studio",
            "Actionable Marketing Institute",
          ],
        },
      
        {
          heading: "WHY COSCHEDULE",
          items: ["Customer Stories", "Support", "Product Announcements", "Pricing"],
        },
        {
          heading: "COMPANY",
          items: ["About", "Jobs", "Press", "Contact US", "Afflicate Program"],
        },
        {
          heading: "RESOURCES",
          items: [
            "Marketing Blog",
            "CoSchedule Guide",
            "Marketing Strategy Report",
            "Agile Marketing Guide",
            "Actionable Marketing Podcast",
            "10x Marketing Formula Book",
            "Get Started With Agile Marketing Guide",
          ],
        },
        {
          heading: "TOPIC LIBRARIES",
          items: [
            "Marketing",
            "Marketing Ideas",
            "Marketing Strategy",
            "Content Marketing",
          ],
        },
        {
          heading: "TOOLS",
          items: [
            "Headline Analyzer",
            "Email Subject Line Tester",
            "Social Message Optimizer",
            "Marketing Dictionary",
          ],
        },
      ];
      
      localStorage.setItem("footers", JSON.stringify(footerArr));
      
      let footerApply = JSON.parse(localStorage.getItem("footers"));
    
      display(footerApply);
}

const display = (footerApply) => {
    let sideRhs_div = document.getElementById("sideRhs");
    sideRhs_div.innerText = null;
  
    footerApply.forEach((el) => {
      let div = document.createElement("div");
      let heading = document.createElement("h3");
      heading.innerText = el.heading;
  
      div.append(heading);
  
      el.items.forEach((each) => {
        let item = document.createElement("div");
        item.innerText = each;
        div.append(item);
      });
      sideRhs_div.append(div);
    });
  };

// export {footer};