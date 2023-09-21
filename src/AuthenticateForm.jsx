import { useState } from "react";
import { deleteLoginCookie, userLogin } from "./javascript/Api";
import Cookies from "js-cookie";

export default function Authenticate() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState(null);



  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await userLogin(userName, passWord);
      console.log(response.data);
      Cookies.set("loginToken", response.data.token, {expires: 7});
      deleteLoginCookie();
      const cookieTest = Cookies.get("loginToken");
      console.log(`Login Token: ${cookieTest}`)
    }
    catch (e) {
      setError(e);
      console.error(e);
    }

  }
  return <>
    <h2>Authenticate!</h2>
    {error && <p>{error}</p>}
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
  </>

}