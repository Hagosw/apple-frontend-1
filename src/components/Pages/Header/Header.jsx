// import appleLogo from "../images/icons/logo-sm.png";
// import searchIcon from "../images/icons/search-icon-sm.png";
// import cart from "../images/icons/cart-sm.png";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <div className="nav-wrapper fixed-top">
//       <div className="container">
//         <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//           <button
//             className="navbar-toggler navbar-toggler-right"
//             type="button"
//             data-toggle="collapse"
//             data-target=".navbar-collapse"
//           >
//             ☰
//           </button>
//           <Link className="navbar-brand mx-auto" to="/">
//             <img src={appleLogo} />
//           </Link>

//           <div className="navbar-collapse collapse">
//             <ul className="navbar-nav nav-justified w-100 nav-fill">
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/mac/">
//                   Mac
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/iphone">
//                   iphone
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/ipad">
//                   ipad
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/watch">
//                   watch
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/tv">
//                   tv
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/music">
//                   Music
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/support">
//                   Support
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/search/">
//                   <img src={searchIcon} />
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link js-scroll-trigger" to="/cart/">
//                   <img src={cart} />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Header;



import React from "react";
// import Link from "react-router-dom" and replace all anchor links with "Link" and href with to
import { Link } from "react-router-dom";
// import NavbarList from "../Navbar/NavbarList";
import NavbarList from "../../../components/Pages/Navbar/NavbarList";
import {Navbar, Container, Nav} from "react-bootstrap"
import appleLogo from "../../../images/icons/logo-sm.png";
import searchLogo from "../../../images/icons/search-icon-sm.png";
import cartLogo from "../../../images/icons/cart-sm.png";

// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div className="nav-wrapper fixed-top ">
      <Container>
        <Nav>
          <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link className="navbar-brand mx-auto" to="/">
              <img src={appleLogo} alt="apple" />
            </Link>

            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavbarList LinkUrl="/mac/" LinkName="Mac" />
                <NavbarList LinkUrl="/iphone/" LinkName="iphone" />
                <NavbarList LinkUrl="/ipad/" LinkName="ipad" />
                <NavbarList LinkUrl="/watch/" LinkName="Watch" />
                <NavbarList LinkUrl="/tv/" LinkName="tv" />
                <NavbarList LinkUrl="/music/" LinkName="Music" />
                <NavbarList LinkUrl="/support/" LinkName="Support" />
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search">
                    <img src={searchLogo} alt="search" />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart">
                    <img src={cartLogo} alt="cart" />
                  </Link>
                </li>

                
               
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </Nav>
      </Container>
    </div>
  );
}

export default Header;
