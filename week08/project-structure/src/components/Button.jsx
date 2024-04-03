import React from 'react';

function Button({ label }) {
  const style = {
    backgroundColor: '#4CAF50', // Green
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  };

  return (
    <button style={style}>
      {label}
    </button>
  );
}

export default Button;