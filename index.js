// import {navbar} from "./components/navbar.js";
// const nav_div = document.getElementById('navbar');
// nav_div.innerHTML=navbar()


import {sort,last, footer} from "./components/footer1.js";
 const sort_div = document.getElementById("container")
 sort_div.innerHTML = sort();
 footer()

 const last_div = document.getElementById("last_portion")
 last_div.innerHTML = last()
  

let heading_div= document.querySelector(".heading")
   heading_div.addEventListener("click",()=>{
   window.location.href="navbar.html"
})


let start_btn= document.getElementById("start")
start_btn.addEventListener("click",()=>{
    window.location.href="https://coschedule.com/signup"
})

let get_btn= document.getElementById("get")
  get_btn.addEventListener("click",()=>{
    window.location.href="https://coschedule.com/signup"
})

document.querySelector(".chart").addEventListener("click",()=>{
    window.location.href="https://coschedule.com/press/coschedule-featured-on-2022-gartner-magic-quadrant-for-content-marketing-platforms"
})

document.querySelector(".size").addEventListener("click",()=>{
    window.location.href="https://coschedule.com/press/coschedule-remains-on-inc-5000-list-for-third-consecutive-year"
})



    let sign_div =document.getElementById("sign")
    sign_div.addEventListener("click",()=>{
        window.location.href="https://coschedule.com/signup"
    })

    let request_div = document.getElementById("request")
    request_div.addEventListener("click",()=>{
        window.location.href="https://coschedule.com/product-demo"
    })

    let sign_in_div = document.getElementById("sign_in")
    sign_in_div.addEventListener("click",()=>{
        window.location.href="https://accounts.coschedule.com/login"
    })

  document.querySelector(".btn").addEventListener("click",()=>{
    window.location.href="https://coschedule.com/marketing-suite"
  })

  document.querySelector(".btn1").addEventListener("click",()=>{
    window.location.href="https://coschedule.com/marketing-calendar"
  })

  document.querySelector(".btn2").addEventListener("click",()=>{
    window.location.href="https://coschedule.com/headline-studio"
  })

  document.querySelector(".btn3").addEventListener("click",()=>{
    window.location.href="https://coschedule.com/actionable-marketing-institute/ami-pro"
  })
   

  document.querySelector(".insta").addEventListener("click",()=>{
    window.location.herf=""
  })
