import React from 'react';

function Button({ onClick, children, type }) {
  return (
    <button
      onClick={onClick}
      className={`button button--${type}`}
    >
      {children}
    </button>
  );
}

export default Button;
