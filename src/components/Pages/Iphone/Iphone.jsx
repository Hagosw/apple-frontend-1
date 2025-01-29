// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Iphone() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/iphone")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(() => data.products);
//       })
//       .catch(() => console.log("error:unable to fetch!!"));
//   }, []);

//   console.log(products);
//   let order = 1;
//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <h1 className="title-wraper font-weight-bold">Iphones</h1>
//               <h2 className="brief-description">The best for the brightest.</h2>
//             </div>
//           </div>
//           {products.map((product) => {
//             let id = product.product_url;
//             let title = product.product_name;
//             let img = product.Product_img;
//             let Brief = product.Product_brief_description;
//             let StartPrice = product.Starting_price;
//             let PriceRange = product.Price_range;
//             let productPage = "/iphone/" + id;

//             let order1 = 1;
//             let order2 = 2;
//             if (order !== 1) {
//               order1 = 2;
//               order2 = 1;
//               order--;
//             } else {
//               order++;
//             }

//             let productDiv = (
//               <div
//                 // key={id}
//                 className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-title h1 font-weight-bold">
//                     {title}
//                   </div>
//                   <div className="product-brief font-weight-bold">{Brief}</div>
//                   <div className="starting-price font-weight-bold">
//                     {`Starting at ${StartPrice}`}
//                   </div>
//                   <div className="monthly-price font-weight-bold">
//                     {PriceRange}
//                   </div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li className="font-weight-bold">
//                         <Link to={productPage}>Learn more</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="prodict-image">
//                     <img src={img} alt="" />
//                   </div>
//                 </div>
//               </div>
//             );
//             return productDiv;
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }
// export default Iphone;

// 

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/iphones")

    // fetch("/iphones.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data);
        setProducts(data.products);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  
 console.log(products);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {/* Section header */}
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">The best for the brightest.</div>
            </div>
          </div>

          {/* Product list */}
          {products?.map((product, index) => (
            <div
              key={product.product_url}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              {/* Product details */}
              <div className={`col-sm-12 col-md-6 order-${index % 2 === 0 ? 1 : 2}`}>
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">{product.product_brief_description}</div>
                <div className="starting-price">Starting at ${product.starting_price}</div>
                <div className="monthly-price">{product.price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={`/iphone/${product.product_url}`}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Product image */}
              <div className={`col-sm-12 col-md-6 order-${index % 2 === 0 ? 2 : 1}`}>
                <div className="product-image">
                  <img src={product.product_img} alt={product.product_name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
