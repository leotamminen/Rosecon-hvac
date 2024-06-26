import React from 'react';
import './App.css';
import huoltoImage from './images/huolto.jpg';

const Backdrop = () => {
  return (
    <div className="backdrop" style={{ backgroundImage: `url(${huoltoImage})` }}>
      <div className="overlay">
        <h1 className="text">LVI-Hommat since 2019</h1>
      </div>
    </div>
  );
};

export default Backdrop;
