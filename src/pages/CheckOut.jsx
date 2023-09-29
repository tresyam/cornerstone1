import React from "react";
import Summary from "../cart/summary";
import Mens from "./mens";
import { useNavigate } from "react-router-dom";
import Payment from "./payment";

function CheckOut({ roundTotalPrice }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/payment");
  };

  return (
    <>
      <div>
        {/* <h1 className="h-top-all">Check Out</h1> */}
        <form className="form-container">
          <h5 className="header">SHIPPING ADDRESS</h5>
          <div className="form-row">
            <label for="inputEmail4"></label>
            <input
              type="name"
              className="form-control"
              id="inputFirstName"
              placeholder="First Name"
            />
          </div>
          <div className="form-row">
            <label for="inputPassword4"></label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              placeholder="Last name"
            />
          </div>
          <div class="form-row">
            <label for="inputAddress"></label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-row">
            <label for="inputAddress2"></label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity"></label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="City"
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState"></label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Your city..</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip"></label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                placeholder="Zip code"
              />
            </div>
          </div>
          <div className="form-group">
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck"></label>
            </div>
          </div>
        </form>
        <button className="check-out-btn" onClick={handleButtonClick}>
          Continue
        </button>
      </div>
      <Summary roundTotalPrice={roundTotalPrice} />
    </>
  );
}

export default CheckOut;
