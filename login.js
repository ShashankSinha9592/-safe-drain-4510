let form= document.querySelector("form");
let userData= JSON.parse(localStorage.getItem("users"))|| [];
console.log(userData);

function chk(event){

   
    event.preventDefault();
   
    console.log(userData);

    let data={
        email:form.email.value,
        password: form.password.value,
        
    }
        if(checkSignin(data.email,data.password) ===true){
            localStorage.setItem("sign_in",JSON.stringify(data));
            alert("sign in sucessful");
            window.location.href="index.html"
        

    }else{
        alert("User not Found!")
    }
}
function checkSignin(email,password){
    // let filter= userData.filter(function(element){
    //     return element.email === email && element.password === password;
    // })
    // if acct exist return output
    let flag=false;
    for(let i=0;i<userData.length;i++){
        if(userData[i].email==email && userData[i].password==password){
            flag=true
        }
    }
//     if(filter.length > 0){
//     return true;
//   }
//   else{
    console.log(flag,email,password)
    return flag;
//   }
}