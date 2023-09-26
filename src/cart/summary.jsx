import React from "react";

function Summary({ roundTotalPrice, roundTaxTotal, totalShipCal, subTotal }) {
  return (
    <div>
      <div className="top-right-div">
        <h3 className="check-out">Summary</h3>
        <span className="mem-offer">Members get FREE shipping</span>
        <br></br>
        <div className="cart-r-num">
          Subtotal
          <div className="check-out">${subTotal}</div>
        </div>
        <div className="cart-r-num">
          Estimated Shipping & Handling
          <div className="check-out">${totalShipCal}</div>
        </div>
        <div className="cart-r-num">
          Estimated Tax
          <div className="check-out">${roundTaxTotal}</div>
        </div>
        <hr></hr>
        <div className="cart-r-num">
          Total Price:
          <span>
            <strong>${roundTotalPrice}</strong>
          </span>
        </div>

        <hr></hr>
      </div>
    </div>
  );
}

export default Summary;
