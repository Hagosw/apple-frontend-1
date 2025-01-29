import React from "react";
// import laptopsolid from "../images/icons/laptopsolid.svg";
import laptopsolid from "../../../images/icons/laptopsolid.svg";


function Mac() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1 className="title-wraper font-weight-bold">Macbook Pro</h1>
            </div>
            <img className="smilelittle" src={laptopsolid} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mac;
