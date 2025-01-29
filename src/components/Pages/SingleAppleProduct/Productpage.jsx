// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function Productpage() {
//   const [products, setproducts] = useState([]);
//   const { productID } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:3001/iphone")
//       .then((res) => res.json())
//       .then((products) => {
//         const productList = products.products;
//         const singleProduct = productList.filter(
//           (x) => x.product_url == productID
//         );
//         setproducts(singleProduct);
//       });
//   }, [productID]);

//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           {products?.map((product) => {
//             let id = product.product_url;
//             let title = product.product_name;
//             let img = product.Product_img;
//             let Brief = product.Product_brief_description;
//             let StartPrice = product.Starting_price;
//             let PriceRange = product.Price_range;

//             let details = product.Product_description;

//             let productDiv = (
//               <div key={id} className="bottom-100">
//                 <div className="row justify-content-center text-center bottom-50">
//                   <div className="col-12">
//                     <div className="title-wraper font-weight-bold h1">
//                       {title}
//                     </div>
//                     <div className="brief-description h3 ">{Brief}</div>
//                   </div>
//                 </div>

//                 <div className="row justify-content-center text-center product-holder h-100">
//                   <div className={`col-sm-12 col-md-6 my-auto`}>
//                     <div className="starting-price">
//                       {`Starting at ${StartPrice}`}
//                     </div>
//                     <div className="monthly-price">{PriceRange}</div>
//                     <div className="product-details">{details}</div>
//                   </div>

//                   <div className={`col-sm-12 col-md-6`}>
//                     <div className="prodict-image">
//                       <img src={img} />
//                     </div>
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

// export default Productpage;

// 


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { productID } = useParams();
  console.log(productID);

  useEffect(() => {
    fetch("http://localhost:3001/iphones")


    // fetch("/iphones.json")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.find(
          (product) => product.product_url === productID
        );
        setProduct(singleProduct || null);
      })
      .catch((error) => console.log("Error: unable to fetch!!", error));
  }, [productID]);

  console.log(product);

  if (product) {
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            <div key={product.product_id}>
              <div className="row justify-content-center text-center">
                <div className="col-12 mt-5 pt-5">
                  <div className="title-wrapper font-weight-bold">
                    {product.product_name}
                  </div>
                  <div className="brief-description">
                    {product.product_brief_description}
                  </div>
                </div>
              </div>
              <div className="row justify-content-center text-center product-holder h-100 m-5">
                <div className="col-sm-12 col-md-6 my-auto">
                  <div className="starting-price">
                    Starting at ${product.starting_price}
                  </div>
                  <div className="monthly-price">{product.price_range}</div>
                  <div className="product-details">
                    {product.product_description}
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 my-auto">
                  <div className="product-image">
                    <img src={product.product_img} alt={product.product_name} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default ProductPage;
