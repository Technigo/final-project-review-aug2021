import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import storyElements from '../../reducers/storyElements';
import StoryButton from '../../styledComponents/StoryButton';
import styled from 'styled-components';

const BaseStory7 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const friend = useSelector(
    (store) => store.storyElements.selectedElements.friend.name
  );
  const friendsName = useSelector(
    (store) => store.storyElements.selectedElements.friendsName
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAnswerSubmit = (name, image) => {
    dispatch(storyElements.actions.setStoryPage());
  };

  const onRestart = () => {
    dispatch(storyElements.actions.restartGame());
    navigate('/skapasaga');
  };

  return (
    <BaseContainer>
      <SectionYellow>
        <ImageContainer>
          <img src={friendsName.image} alt={friendsName.name} />
        </ImageContainer>
        <p>{`Jo, jag heter ${friendsName.name}. Vill du ha en nöt av mig?`}</p>{' '}
        <p>{`– Hej, svarar ${character}. Jättegärna. Jag älskar faktiskt nötter.`}</p>
        <p>{`– Det gör jag med. Och de här låter så roligt när man skalar dem, säger ${friend}n.`}</p>
        <p>{`– Ja, jag vet, säger ${character} och så skrattar de båda två.`}</p>
      </SectionYellow>

      <h3>Vill du läsa hela sagan och spara den, eller starta om?</h3>
      <StoryButtonWrapper>
        <StoryButton text="Visa sagan" onClick={() => onAnswerSubmit()} />
        <StoryButton text="Börja om" onClick={() => onRestart()} />
      </StoryButtonWrapper>
    </BaseContainer>
  );
};

export default BaseStory7;

const BaseContainer = styled.div`
  display: grid;
  padding: 2%;
  width: 80%;
  margin: 0 auto;

  h3 {
    margin-left: 2%;
  }
`;

const SectionYellow = styled.div`
  padding: 3% 9% 3%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
  min-height: 60vh;
  background-color: var(--yellow);

  @media (min-width: 767px) {
    min-height: 40vh;
    font-size: 18px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    margin: 5px;
    border-radius: 50%;
    box-shadow: 1px 1px 8px 0px rgb(0 0 0 / 50%);
  }

  @media (min-width: 767px) {
    padding-bottom: 2%;
  }
`;

const StoryButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;
