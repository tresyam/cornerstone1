import { useState } from "react";
import Authenticate from "./AuthenticateForm";
import SignUpForm from "./SignupForm";
import { checkIfLoggedIn } from "./javascript/Api";
import LoggedIn from "./LoggedIn";
import "./LoginPage.css";

function checkIfLoggedInLogPage() {
    if (isLoggedIn) return true;
    else return false;
}

export default function LoginPage() {
    const [authenticateVisible, setAuthenticateVisible] = useState(true);
    const [signupVisible, setSignupVisible] = useState(false);
    const [loggedInVisible, setLoggedInVisible] = useState(false);


    if (authenticateVisible) {
        return <div className="loginMain">
            <div className="loginComponent">
                <Authenticate setAuthenticateVisible={setAuthenticateVisible} setSignupVisible={setSignupVisible} setLoggedInVisible={setLoggedInVisible} />
            </div>
        </div>;
    }
    if (signupVisible) {
        return <div className="loginMain">
            <div className="loginComponent">
                <SignUpForm setAuthenticateVisible={setAuthenticateVisible} setSignupVisible={setSignupVisible} setLoggedInVisible={setLoggedInVisible} />
            </div>
        </div>;

    }
    if (loggedInVisible) {
        return <div className="loginMain">
            <div className="loginComponent">
                <LoggedIn />
            </div>
        </div>;

    }
}


/*
if the user is already logged in, redirect to the main page
else, show the login component

Also create a page to create a user, display data, and update as needed?  
Will require another React component page, and a js utilities page
*/

