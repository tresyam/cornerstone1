import { useState } from "react";
import Authenticate from "./AuthenticateForm";
import SignUpForm from "./SignupForm";
import { checkIfLoggedIn } from "./javascript/Api";
import LoggedIn from "./LoggedIn";

function checkIfLoggedInLogPage(){
    if(isLoggedIn) return true;
    else return false;
}

export default function LoginPage() {
    const [authenticateVisible, setAuthenticateVisible] = useState(true);
    const [signupVisible, setSignupVisible] = useState(false);
    const [loggedInVisible, setLoggedInVisible] = useState(false);

    if(authenticateVisible){
        return <Authenticate setAuthenticateVisible={setAuthenticateVisible} setSignupVisible={setSignupVisible} setLoggedInVisible={setLoggedInVisible}/>;
    }
    if(signupVisible){
        return <SignUpForm setAuthenticateVisible={setAuthenticateVisible} setSignupVisible={setSignupVisible} setLoggedInVisible={setLoggedInVisible}/>;

    }
    if(loggedInVisible){
        return <LoggedIn />;
    }
}


/*
if the user is already logged in, redirect to the main page
else, show the login component

Also create a page to create a user, display data, and update as needed?  
Will require another React component page, and a js utilities page
*/

