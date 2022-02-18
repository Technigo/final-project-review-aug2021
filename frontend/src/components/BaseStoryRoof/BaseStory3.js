import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showTools } from '../../reducers/dynamicData';
import { shuffleArray } from '../../utils/shuffleArray';
import ImageButton from '../../styledComponents/ImageButton';
import styled from 'styled-components';

const BaseStory3 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const feeling = useSelector(
    (store) => store.storyElements.selectedElements.feeling
  );
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound
  );
  const tools = useSelector((store) => store.dynamicData.tools);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showTools());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    dispatch(storyElements.actions.setSelectedTool({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };

  return (
    <BaseContainer>
      <SectionRed>
        <ImageContainer>
          <img src={feeling.image} alt={feeling.name} />
        </ImageContainer>
        <p>{`Ja, det kändes lite ${feeling.name}. ${character} sprang ut för att se var ljudet kom ifrån. Och nu hördes det igen. Ett ${sound.name}. Men va? Det kommer ju från taket. ${character} tänker att det är bäst att försöka ta sig upp på taket. Det har ${character} inte gjort innan, men det kan väl inte vara så svårt? Men jag behöver nog... `}</p>
      </SectionRed>

      <h3>Vadå?</h3>
      <ImageButtonWrapper>
        {shuffleArray(tools).map((item) => (
          <ImageButton
            key={item.name}
            onClick={() => onAnswerSubmit(item.name, item.image)}
            text={<img src={item.image} alt={item.image} />}
          />
        ))}
      </ImageButtonWrapper>
    </BaseContainer>
  );
};

export default BaseStory3;

const BaseContainer = styled.div`
  display: grid;
  padding: 2%;
  width: 80%;
  margin: 0 auto;

  h3 {
    margin-left: 2%;
  }
`;

const SectionRed = styled.div`
  padding: 3% 9% 3%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
  min-height: 60vh;
  background-color: var(--focus);

  @media (min-width: 767px) {
    min-height: 40vh;
    font-size: 18px;
  }
`;

const ImageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
