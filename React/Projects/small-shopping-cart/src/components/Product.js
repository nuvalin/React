//rfc to get this empty component
import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>R{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
