import React from "react";
import cartempty from "../../../images/icons/cartempty.svg";

function Cart() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1 className="title-wraper font-weight-bold">Cart is Empty</h1>
            </div>
            <img className="smilelittle" src={cartempty} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
