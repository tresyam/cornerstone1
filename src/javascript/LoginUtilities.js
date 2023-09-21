// import { userLogin } from "./Api";
// import { makeLoginObject } from "./CreateObjectUtilities";
// import Cookies from "js-cookie";

// function loginUser(userID, userPassword) {
//     const loginToken = userLogin(makeLoginObject(userID, userPassword));

//     let cookieExpiration = new Date();
//     cookieExpiration.setTime(cookieExpiration.getTime() + 59 * 60 * 1000);

//     Cookies.set("loggedIn", loginToken, { expires: cookieExpiration });
// }

// function checkIfLoggedIn() {
//     const cookie = Cookies.get("loggedIn");
//     if (cookie != undefined) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }