import React from 'react';
import styled from 'styled-components';

const ImageButton = ({ onClick, text }) => {
  return <ImageBtn onClick={onClick}>{text}</ImageBtn>;
};

export default ImageButton;

const ImageBtn = styled.button.attrs({ type: 'submit' })`
  all: unset;
  cursor: pointer;
  img {
    width: 90px;
    height: 90px;
    margin: 5px;
    border-radius: 50%;
    box-shadow: 1px 1px 8px 0px rgb(0 0 0 / 50%);
  }
`;
