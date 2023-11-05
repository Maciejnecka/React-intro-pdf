import React from 'react';
import PropTypes from 'prop-types';
const Product = (props) => {
  const { name = '??', price = 0 } = props;
  return (
    <div>
      {name}: {price}PLN
    </div>
  );
};
Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Product;
