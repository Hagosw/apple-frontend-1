import React from "react";
import watch from "../../../images/icons/watch.svg";

function Watch() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1 className="title-wraper font-weight-bold">
                Time's ticking, so make every second count
              </h1>
            </div>
            <img className="smilelittle" src={watch} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Watch;
