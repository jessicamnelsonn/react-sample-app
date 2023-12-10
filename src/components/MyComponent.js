import React from 'react';

function MyComponent() {
  const handleButtonClick = () => {
    alert("Button Clicked!");
    // You can add more functionality here
  };

  return (
    <div>
      <p className='text-white text-4xl font-bold'>Welcome to my React sample app!</p>
      <button
        className="bg-purple-800 text-white text-xl py-2 px-4 mt-4 rounded-md hover:bg-purple-400"
        onClick={handleButtonClick}>
        Click me!
      </button>
    </div>
  );
}

export default MyComponent;