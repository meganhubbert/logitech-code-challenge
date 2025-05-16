import React from 'react';

function Total( { products = {} } ) {
    const total = products?.reduce((sum, item) => sum + item.price, 0);

    return <span className='total'>Total: ${total.toFixed(2)}</span>;
}
export default Total;
