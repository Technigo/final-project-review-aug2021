import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showSounds } from '../../reducers/dynamicData';
import { shuffleArray } from '../../utils/shuffleArray';
import StoryButton from '../../styledComponents/StoryButton';
import styled from 'styled-components';

const BaseStory1 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter
  );
  const sounds = useSelector((store) => store.dynamicData.sounds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSounds());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    dispatch(storyElements.actions.setSelectedSound({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };

  return (
    <BaseContainer>
      <SectionGreen>
        <ImageContainer>
          <img src={character.image} alt={character.name} />
        </ImageContainer>
        <p>
          {`Det var en helt vanlig dag. Ingen hade kunnat ana det som skulle
          hända. ${character.name} var bara hemma och åt lite nötter, för det var ${character.name}s bästa grej att knapra på. Ja, förutom pinnar, chips och
          det översta lagret på lasagne. De var också bra grejer att knapra på. 
          Men mitt i allt knaprande hörde ${character.name} någonting.`}
        </p>
      </SectionGreen>

      <h3>Vad var det som lät?</h3>
      <StoryButtonWrapper>
        {shuffleArray(sounds).map((item) => (
          <StoryButton
            key={item.name}
            onClick={() => onAnswerSubmit(item.name, item.image)}
            text={item.name}
          />
        ))}
      </StoryButtonWrapper>
    </BaseContainer>
  );
};

export default BaseStory1;

const BaseContainer = styled.div`
  display: grid;
  padding: 2%;
  width: 80%;
  margin: 0 auto;

  h3 {
    margin-left: 2%;
  }
`;

const SectionGreen = styled.div`
  padding: 3% 9% 3%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
  min-height: 60vh;
  background-color: var(--green);

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
  flex-grow: 1;
  margin: 0 auto;
  justify-content: center;
`;
