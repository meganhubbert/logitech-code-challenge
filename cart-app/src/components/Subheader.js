import React from 'react';
import Total from './Total';

function Subheader( { products = {} } ) {

    return (
        <div className="subheader__wrapper left-gutter">
            <h3 className="subheader">
                Cart contains { products?.length  } products
            </h3>
            <Total products={products} />
        </div>
    );
}

export default Subheader;
