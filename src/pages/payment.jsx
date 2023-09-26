import React from "react";
import { useNavigate } from "react-router-dom";
import Summary from "../cart/summary";

function Payment({ roundTotalPrice }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/thankyou");
  };

  return (
    <>
      {/* <h1 className="h-top-all">Check Out</h1> */}
      <div>
        <form className="form-container">
          <h5 className="header">PAYMENT DETAILS</h5>
          <div className="form-row">
            <label for="inputEmail4"></label>
            <input
              type="name"
              className="form-control"
              id="inputFirstName"
              placeholder="Card holder name"
            />
          </div>
          <div className="form-row">
            <label for="inputPassword4"></label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              placeholder="Card number 5555-5555-5555-5555"
            />
          </div>
          <div className="form-row">
            <label for="inputPassword4"></label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              placeholder="Expiration date MM/YY"
            />
          </div>
          <div className="form-row">
            <label for="inputPassword4"></label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              placeholder="Security code 000"
            />
          </div>
        </form>
        <button className="check-out-btn" onClick={handleButtonClick}>
          Confirm
        </button>
      </div>
      <Summary roundTotalPrice={roundTotalPrice} />
    </>
  );
}

export default Payment;
