import { useState } from "react";
import { addNewUser, userLogin } from "./javascript/Api";
import { makeUserObject } from "./javascript/CreateObjectUtilities";


/*
need to make a user data form, can re-use to input for new user, and display/update for existing user
\Need a sign up and sign in page, but can probably do without the authenticate page?  Use cookie instead?  
 */


export default function SignUpForm() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userStreet, setUserStreet] = useState("");
    const [userAddressNumber, setUserAddressNumber] = useState("");
    const [userZipCode, setUserZipCode] = useState("");
    const [addressLat, setAddressLat] = useState("");
    const [addressLong, setAddressLong] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        const newUserObject = makeUserObject(userName, passWord, userEmail, userFirstName, userLastName, userCity, userStreet, userAddressNumber, userZipCode, userPhone);
        event.preventDefault();
        try {
            const response = await addNewUser(newUserObject);
            // const data = response.json();
            console.log(response);
        }
        catch (e) {
            setError(e);
            console.error(e);
        }
    }


    return (
        <>
            <h2>Sign Up</h2>
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
                <br/>
                <label>
                    First Name:{" "}
                    <input
                        value={userFirstName}
                        onChange={(e) => setUserFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last Name:{" "}
                    <input
                        value={userLastName}
                        onChange={(e) => setUserLastName(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Email:{" "}
                    <input
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                </label>
                <br/>
                
                <label>
                    Address:{" "}
                    <input
                        value={userStreet}
                        onChange={(e) => setUserStreet(e.target.value)}
                    />
                </label>
                <label>
                    Street Number:{" "}
                    <input
                        value={userAddressNumber}
                        onChange={(e) => setUserAddressNumber(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    City:{" "}
                    <input
                        value={userCity}
                        onChange={(e) => setUserCity(e.target.value)}
                    />
                </label>
                <label>
                    Zip Code:{" "}
                    <input
                        value={userZipCode}
                        onChange={(e) => setUserZipCode(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Phone Number:{" "}
                    <input
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                    />
                </label>
                <br/>
                <button>Submit</button>
            </form>
        </>
    );
}