import React from "react";
import smile from "../../../images/icons/facesmilesolid.svg";

function Search() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1 className="title-wraper font-weight-bold">
                Didn’t find what you’re looking for? <br></br>Try searching
                again.
              </h1>
            </div>
            <img className="smilelittle" src={smile} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
