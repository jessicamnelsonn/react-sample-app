import React from 'react';
import MyComponent from '../components/MyComponent';

const Home = () => {
  return (
    <main className="relative">
      <img src='static/images/react-hero.jpg' alt="React Hero" className="w-full h-auto" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-8xl font-extrabold mb-6 text-purple-800">Hello!</h1>
        <MyComponent />
      </div>
    </main>
  );
};

export default Home;