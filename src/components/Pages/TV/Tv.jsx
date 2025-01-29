import React from "react";
import tv from "../../../images/icons/tv.svg";

function Tv() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1 className="title-wraper font-weight-bold">
                TV’s a blast, but don’t overdo it. Too much screen time can slow
                you down and mess with your vibe!
              </h1>
            </div>
            <img className="smilelittle" src={tv} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tv;
