import { useState } from "react";
import Authenticate from "./AuthenticateForm";
import SignUpForm from "./SignupForm";
import { checkIfLoggedIn } from "./javascript/Api";



export default function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());
    const [authenticateVisible, setAuthenticateVisible] = useState(true);
    const [signupVisible, setSignupVisible] = useState(false);

    // setIsLoggedIn(checkIfLoggedIn());

    if (isLoggedIn) {
        return <>{alert("You are already logged in!")}</>
        //redirect to the home page
    }

    if (authenticateVisible) {
        return <Authenticate setAuthenticateVisible={setAuthenticateVisible} setSignupVisible={setSignupVisible} />;
    }
    else {
        return <SignUpForm setAuthenticateVisible={setAuthenticateVisible} setSignupVisible={setSignupVisible} />
    }
    // return (
    //     <>
    //         {authenticateVisible && }
    //         {signupVisible && <SignUpForm />}
    //     </>
    // );
}


/*
if the user is already logged in, redirect to the main page
else, show the login component

Also create a page to create a user, display data, and update as needed?  
Will require another React component page, and a js utilities page
*/

