import React from 'react';
import ProductListItem from './ProductListItem';

function ProductList({ products, onRemove }) {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default ProductList;
