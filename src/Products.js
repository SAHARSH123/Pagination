import React from "react";

export default function Products(props) {
  const products = props.products.map((product) => (
    <article className="card" key={product.id}>
      <img src={product?.thumbnail} alt="productThumbnail" />
      <h4>{product.title}</h4>
    </article>
  ));
  return <>{products}</>;
}
