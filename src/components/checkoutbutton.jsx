import { React, useState } from "react";
import CheckOut from "../pages/CheckOut";
import { useNavigate } from "react-router-dom";

export default function Checkoutbutton() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLoggedIn === true) {
      navigate("/checkout");
      console.log("your in!");
    } else {
      navigate("/user");
      console.log("sign-in");
    }
  };

  return (
    <>
      {/* <button
        className="sign-in-btn"
        onClick={() => navigate("/checkout")}
      ></button> */}
      <div>
        {isLoggedIn ? (
          <div>
            <button className="sign-in-btn" onClick={handleButtonClick}>
              Checkout
            </button>
            <p></p>
          </div>
        ) : (
          <div>
            <button className="sign-in-btn" onClick={handleButtonClick}>
              Checkout
            </button>
            <p style={{ color: "red" }}>Must be logged in to continue!</p>
          </div>
        )}
      </div>
    </>
  );
}
