import { useState } from "react";
import { checkIfLoggedIn, deleteLoginCookie, userLogin } from "./javascript/Api";
import Cookies from "js-cookie";

export default function Authenticate({ setAuthenticateVisible, setSignupVisible, setLoggedInVisible }) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());

  if(isLoggedIn){
    displaySignedInMessage();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await userLogin(userName, passWord);
      console.log(response.data);
      Cookies.set("loginToken", response.data.token, { expires: 7 });
      displaySignedInMessage();
      // deleteLoginCookie();
      // const cookieTest = Cookies.get("loginToken");
      // console.log(`Login Token: ${cookieTest}`)
    }
    catch (e) {
      setError(e);
      console.error(e);
      alert(`We're sorry, username or password is incorrect.`)
      window.location.reload(true);
    }
  }

  function switchToSignup() {
    setAuthenticateVisible(false);
    setSignupVisible(true);
    setLoggedInVisible(false);
  }

  function displaySignedInMessage(){
    setAuthenticateVisible(false);
    setSignupVisible(false);
    setLoggedInVisible(true);
  }

  return <>
    <h2>Please sign in!</h2>
    {error!=null && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <label>
        Username:{" "}
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={passWord}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
    <form onSubmit={switchToSignup}>
      <label>No Account?</label><button>Sign up!</button>
    </form>
  </>

}