import React from "react";
import support from "../../../images/icons/support.svg";

function Support() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1 className="title-wraper font-weight-bold">
                One click, all the support you need got you covered!
              </h1>
            </div>
            <img className="smilelittle" src={support} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
