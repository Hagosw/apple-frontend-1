import macbook from "../../../images/home/mac-laptop.jpg";
function Macbook() {
  return (
    <div className="top-100">
      <div className="text-center fluid-container">
        <div className="h4">16-inch model</div>
        <div className="font-weight-bold display-4">MacBook Pro</div>
        <div className="h2">The best for the brightest.</div>
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
        <div className="">
          <img src={macbook} />
        </div>
      </div>
    </div>
  );
}

export default Macbook;
