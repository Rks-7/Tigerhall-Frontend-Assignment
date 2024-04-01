import React from 'react'
import Lottie from "react-lottie";
import animationData from '../assets/Flow 3.json'; 
import "../App.css"


const Loading = () => {
  const defaultOptions = {
    loop: true, 
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", 
    },
  };

  return (
    <div className='lottie-container'>
      <Lottie options={defaultOptions}  />
    </div>
  );
};

export default Loading;

