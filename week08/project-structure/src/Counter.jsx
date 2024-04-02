import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Set initial state

  const handleClick = () => setCount(count + 1); // Increment variable by 1
	
  return (
    <button onClick={handleClick}>count: {count}</button> // Display count
  );
}

export default Counter;