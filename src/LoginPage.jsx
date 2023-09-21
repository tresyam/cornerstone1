import { useState } from "react";
import Authenticate from "./AuthenticateForm";
import SignUpForm from "./SignupForm";

const [isLoggedIn, setIsLoggedIn] = useState(false);

export default function App() {
    return (
        <>
            <Authenticate/>
            <SignUpForm />
        </>
    );
}


/*
if the user is already logged in, redirect to the main page
else, show the login component

Also create a page to create a user, display data, and update as needed?  
Will require another React component page, and a js utilities page
*/

