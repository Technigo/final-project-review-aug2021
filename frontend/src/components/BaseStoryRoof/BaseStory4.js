import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showPlaces } from '../../reducers/dynamicData';
import { shuffleArray } from '../../utils/shuffleArray';
import ImageButton from '../../styledComponents/ImageButton';
import styled from 'styled-components';

const BaseStory4 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const feeling = useSelector(
    (store) => store.storyElements.selectedElements.feeling
  );
  const tool = useSelector(
    (store) => store.storyElements.selectedElements.tool
  );
  const places = useSelector((store) => store.dynamicData.places);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showPlaces());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    dispatch(storyElements.actions.setSelectedPlace({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };

  return (
    <BaseContainer>
      <SectionYellow>
        <ImageContainer>
          <img src={tool.image} alt={tool.name} />
        </ImageContainer>
        <p>{`Exakt! ${tool.name}, tänker ${character}. Inne i förrådet kan det nog finnas ${tool.name}. Åhhh det är så tungt att bära ut. Det hade varit lättare om jag haft en kompis. Till slut får ${character} ut ${tool.name} från förrådet och tar sig närmare taket. Hej och hå. Det är tungt. Och ${feeling.name}. Det känns som att ${character} är...`}</p>
      </SectionYellow>

      <h3>Vartdå?</h3>
      <ImageButtonWrapper>
        {shuffleArray(places).map((item) => (
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

export default BaseStory4;

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
