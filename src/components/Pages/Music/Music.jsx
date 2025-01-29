import React from "react";
import musicsolid from "../../../images/icons/musicsolid.svg";

function Music() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1 className="title-wraper font-weight-bold">
                Music: food for the soul, with over 100 million tracks at your
                fingertips
              </h1>
            </div>
            <img className="smilelittle" src={musicsolid} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Music;
