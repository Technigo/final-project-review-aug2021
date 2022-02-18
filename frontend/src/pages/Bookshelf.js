// Shows bookmarks on saved storys (endpoint needed)
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../reducers/storyElements';
import StoryButton from '../styledComponents/StoryButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Bookshelf = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  const onCreateStoryClick = () => {
    navigate('/skapasaga');
    dispatch(storyElements.actions.restartGame());
  };

  return (
    <BookshelfSection>
      <h1>BOKHYLLA... coming soon</h1>
      <StoryButton onClick={() => onCreateStoryClick()} text="Visa sagor" />
      <StoryButton onClick={() => onCreateStoryClick()} text="Ny saga" />
    </BookshelfSection>
  );
};

export default Bookshelf;

const BookshelfSection = styled.section`
  padding: 15% 5%;
  width: 80%;
  margin: 0 auto;
  margin-top: 3%;
  background-color: var(--yellow);

  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
`;
