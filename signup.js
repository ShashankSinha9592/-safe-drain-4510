class User {
  constructor() {}
  #checkPassword(str1) {
    return str1.length >= 8;
  }
  #checkUsername(str) {
    if (
      str.includes("#") ||
      str.includes("*") ||
      str.includes("%") ||
      str.includes("$")
    ) {
      return false;
    }
    return true;
  }
  async Signup(n, e, u, p, m, d) {
    try {
      if (this.#checkPassword(p) && this.#checkUsername(u)) {
        this.name = n;
        this.email = e;
        this.username = u;
        this.password = p;
        this.mobile = m;
        this.description = d;

        let url = `https://masai-api-mocker.herokuapp.com/auth/register`;

        let res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(this),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let data = await res.json();
        console.log("signup success");
        toggle();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async #Authenticate(token, username) {
    let url = `https://masai-api-mocker.herokuapp.com/user/${username}`;
    try {
      let res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("name", JSON.stringify(username[0]));
      location.href = "./marketing_suite.html";
    } catch (err) {
      alert("Invalid Credentials");
    }
  }
  async Login(username, password) {
    let myData = {
      username,
      password,
    };
    try {
      let url = `https://masai-api-mocker.herokuapp.com/auth/login`;

      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(myData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      this.#Authenticate(data.token, myData.username);
    } catch (err) {
      alert("Invalid Credentials");
    }
  }
}

let container = document.getElementById("container");

toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);

function select(el) {
  return document.querySelector(el).value;
}

let user = new User();
function Register() {
  let n = select("#name");
  let e = select("#email");
  let u = select("#username");
  let p = select("#password");
  let m = select("#mobile");
  let d = select("#desc");

  user.Signup(n, e, u, p, m, d);
}

function LoginUser() {
  let username = select("#userLogin");
  let password = select("#passwordLogin");

  user.Login(username, password);
}
