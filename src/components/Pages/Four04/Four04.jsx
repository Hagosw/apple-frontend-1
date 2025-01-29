import React from "react";
import blank from "../../../images/icons/blank.svg";

function Four04() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1>
                Oops, the page you’re looking for isn’t here. Maybe give it
                another shot?!.
              </h1>
              <img className="smilelittle" src={blank} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Four04;
