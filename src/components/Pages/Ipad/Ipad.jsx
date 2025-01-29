import React from "react";
import ipad from "../../../images/icons/ipad.svg";

function Ipad() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1 className="title-wraper font-weight-bold">21 Century Ipad</h1>
            </div>
            <img className="smilelittle" src={ipad} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ipad;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Ipads() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/ipads")

//     // fetch("/iphones.json")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Data fetched:", data);
//         setProducts(data.products);
//       })
//       .catch((error) => console.log("Error fetching data:", error));
//   }, []);
  
//  console.log(products);

//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           {/* Section header */}
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold">Ipads</div>
//               <div className="brief-description">The best for the brightest.</div>
//             </div>
//           </div>

//           {/* Product list */}
//           {products?.map((product, index) => (
//             <div
//               key={product.product_url}
//               className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
//             >
//               {/* Product details */}
//               <div className={`col-sm-12 col-md-6 order-${index % 2 === 0 ? 1 : 2}`}>
//                 <div className="product-title">{product.product_name}</div>
//                 <div className="product-brief">{product.product_brief_description}</div>
//                 <div className="starting-price">Starting at ${product.starting_price}</div>
//                 <div className="monthly-price">{product.price_range}</div>
//                 <div className="links-wrapper">
//                   <ul>
//                     <li>
//                       <Link to={`/ipads/${product.product_url}`}>Learn more</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Product image */}
//               <div className={`col-sm-12 col-md-6 order-${index % 2 === 0 ? 2 : 1}`}>
//                 <div className="product-image">
//                   <img src={product.product_img} alt={product.product_name} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Ipads;

