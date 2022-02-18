import React from 'react';
import styled from 'styled-components';

const StoryButton = ({ onClick, text }) => {
  return <StoryBtn onClick={onClick}>{text}</StoryBtn>;
};

export default StoryButton;

const StoryBtn = styled.button.attrs({ type: 'submit' })`
  width: 150px;
  margin: 5px;
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: var(--attribute);
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  border-color: var(--button);
  border-style: solid;

  &:hover {
    color: var(--focus);
    background-color: var(--button);
  }
`;
