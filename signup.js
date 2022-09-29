let userArr=[];

class User{

  constructor(name,id){
    this.name=name;
 
  }

  signUp(email,password){
    let isValidated=false;
    
    isValidated=this.#isValidatEmail(email) && this.#isValidatePassword(password);

    if(isValidated){
      this.email=email;
      this.password=password;
      userArr.push(this);
   
      alert("Registration Successful!");
    }
    else{
      alert("Your password must include at least 8 characters.");
    }
  }
    #isValidatEmail(email){
    if(email.length<8){
      return false;
    }else{
      return true;
    }
    }

    #isValidatePassword(password){
      if(password.length<8){
      return false;
    }else{
      return true;
    }
    }
}

    let id=0;

   let signUp=()=>{
    id++;
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    user1=new User(name,id);
    user1.signUp(email,password);
    console.log(userArr)
    localStorage.setItem("users",JSON.stringify(userArr));
    window.location.href="signin.html"
   } 