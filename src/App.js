import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-white min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-6 text-purple-500">Hello, React!</h1>
        <MyComponent />
      </div>
    </div>
  );
}

export default App;
