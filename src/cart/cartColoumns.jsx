import React from "react";

function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Mens</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Womens</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Electronic</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">jewelery</p>
        </div>
      </div>
    </div>
  );
}

export default CartColumns;
