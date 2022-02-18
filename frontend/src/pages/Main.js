import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import storyElements from '../reducers/storyElements';
import StoryButton from '../styledComponents/StoryButton';
import styled from 'styled-components';
// import { API_URL } from '../utils/constants';

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If not having accessToken, redirect to login
  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  const onCreateStoryClick = () => {
    navigate('/skapasaga');
    // setVisible(false);
    dispatch(storyElements.actions.restartGame());
  };
  const onBookshelfClick = () => {
    navigate('/bokhylla');
    // setVisible(false);
  };

  return (
    <MainContainer>
      <TextContainer>
        <h1>{`Hej ${username}!`}</h1>
        <p>Vad vill du göra?</p>
      </TextContainer>
      <MainButtonWrapper>
        <StoryButton onClick={onCreateStoryClick} text="Ny saga" />
        <StoryButton onClick={onBookshelfClick} text="Bokhylla" />
      </MainButtonWrapper>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 20%;

  padding: 5% 9%;

  margin: 0 auto;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const MainButtonWrapper = styled.div`
  display: grid;
  grid-gap: 5%;
  align-items: center;
  margin: 0 auto;
`;
