import React from 'react';
import Button from './Button';

function ProductListItem({ product, onRemove }) {
  return (
    <li className="product-list-item">
      <div>
        <p className="product-list-item__name"><strong>{product.title}</strong></p>
        <p className="product-list-item__price">${product.price}</p>
      </div>
      <Button onClick={() => onRemove(product.id)} type='remove'>
        Remove
      </Button>
    </li>
  );
}

export default ProductListItem;
