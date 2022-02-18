import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animations/404.json';
import styled from 'styled-components';

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoaderWrapper>
      <Lottie options={defaultOptions} height={300} width={300} />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;
export default NotFound;
