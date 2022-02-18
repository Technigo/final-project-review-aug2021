import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/loader.json';
import { useSelector } from 'react-redux';

export const Loader = () => {
  const loading = useSelector((store) => store.rainbowLoader.loading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lottie">
      {/* <Loader options={defaultOptions} height={400} width={400} /> */}
      {loading && <Lottie options={defaultOptions} height={300} width={300} />}
    </div>
  );
};

export default Loader;
