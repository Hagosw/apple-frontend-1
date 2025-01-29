import ipadlogo from "../../../images/icons/new-ipad-logo.png";
import watchlogo from "../../../images/icons/watch-series5-logo.png";
import cardlogo from "../../../images/icons/apple-card-logo.png";
import tvlogo from "../../../images/icons/apple-tv-logo.png";
import servant from "../../../images/icons/servant-logo.png";
function SectionOne() {
  return (
    <div>
      {" "}
      <section className="">
        <div className="iphone11Pro center-cover common text-center fluid-container">
          <div className="font-weight-bold display-4">iphone 11 Pro</div>
          <div className="h3">Pro cameras. Pro display. Pro performance.</div>
          <div className="mb-3 price-wrapper">
            From $24.95/mo. or $599 with trade-in.
          </div>
          <div className="">
            <ul
              id="white-hover"
              className="list-unstyled d-inline-block py1 Apple-links"
            >
              <li className="mr-4 d-inline-block">
                <a href="#" className="text-decoration-none h5">
                  Learn more
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" className="text-decoration-none h5">
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="">
        <div className="iphone11 center-cover common text-center fluid-container">
          <div className="font-weight-bold display-4">iphone 11</div>
          <div className="h3 py-2">Just the right amount of everything.</div>
          <div className="mb-3">From $16.62/mo. or $399 with trade‑in.</div>
          <div className="">
            <ul className="list-unstyled d-inline-block py1 Apple-links">
              <li className="mr-4 d-inline-block">
                <a href="#" className="text-decoration-none h5">
                  Learn more
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" className="text-decoration-none h5">
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bkgclr container-fluid">
        <div className="Apple-Watch-Appple-Card row justify-content-between">
          <div className="Applewatch common text-center center-cover my-3 col-md-6 mb-md-0 mx-md-n3">
            <div className="mt-5">
              <img src={watchlogo} />
            </div>
            <div className="h5 py-2">
              With the new Always-On Retina display.
              <br />
              You've never seen a watch like this.
            </div>
            <div className="">
              <ul className="list-unstyled d-inline-block py1 Apple-links">
                <li className="mr-4 d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Learn more
                  </a>
                </li>
                <li className="d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Buy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="apple-card common text-center center-cover col-md-6 mt-md-3">
            <div className="mt-5">
              <img src={cardlogo} />
            </div>
            <div className="h5 py-3">
              Get 3% Daily Cash on purchases from <br />
              Apple using Apple Card.
            </div>
            <div className="">
              <ul className="list-unstyled d-inline-block py1 Apple-links">
                <li className="mr-4 d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Learn more
                  </a>
                </li>
                <li className="d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Buy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bkgclr container-fluid">
        <div className="TVairpod row justify-content-between">
          <div className="Apple-tv common text-center center-cover col-md-6 my-3 mx-md-n3">
            <div className=" ">
              <div className="mt-5">
                <img src={tvlogo} />
              </div>
            </div>
            <div className="tvshow-logo-wrapper">
              <img src={servant} />
            </div>
            <div className="watchthetrailer">
              <a href="#">Watch the trailer</a>
            </div>
          </div>

          <div className="Air-pods initial-bottom common text-center col-md-6 mt-md-3">
            <div className="mt-5">
              <div className="h1 mt-5">AirPods Pro</div>
            </div>
            <div className="h5 py-2">Magic like you've never heard.</div>
            <div className="">
              <ul
                id="white-hover"
                className="list-unstyled d-inline-block py-1 Apple-links"
              >
                <li className="mr-4 d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Learn more
                  </a>
                </li>
                <li className="d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Buy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bkgclr container-fluid">
        <div className="Macbook-ipad row justify-content-between">
          <div className="macbook-pro initial-bottom common text-center my-3 col-md-6 my-md-0 mx-md-n3">
            <div className="mt-5">16-inch model</div>
            <div className="h1 font-weight-bold">MacBook Pro</div>
            <div className="h5 py-2">The best for the brightest.</div>
            <div className="">
              <ul className="list-unstyled d-inline-block py-1 Apple-links">
                <li className="mr-4 d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Learn more
                  </a>
                </li>
                <li className="d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Buy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="ipad-new common text-center initial-bottom col-md-6 mb-3 mb-md-0">
            <div className="mt-5">
              <img src={ipadlogo} />
            </div>
            <div className="h5 py-2">Like a computer. Unlike any computer.</div>
            <div className="">
              <ul className="list-unstyled d-inline-block py-1 Apple-links">
                <li className="mr-4 d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Learn more
                  </a>
                </li>
                <li className="d-inline-block">
                  <a href="#" className="text-decoration-none h5">
                    Buy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

export default SectionOne;
