import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showFriends } from '../../reducers/dynamicData';
import ImageButton from '../../styledComponents/ImageButton';
import styled from 'styled-components';
import { randomArray } from '../../utils/randomArray';

const BaseStory5 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound
  );
  const place = useSelector(
    (store) => store.storyElements.selectedElements.place
  );
  const friends = useSelector((store) => store.dynamicData.friends);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showFriends());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    dispatch(storyElements.actions.setSelectedFriend({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };

  return (
    <BaseContainer>
      <SectionBlue>
        <ImageContainer>
          <img src={place.image} alt={place.name} />
        </ImageContainer>
        <p>{`Ja precis, som att vara högst upp ${place.name} däruppe på taket. Allt ser liksom lite mystiskt och magiskt ut. Och nu hör ${sound.name} igen! Det kommer bakifrån skorstenen. ${character} går runt (men försiktig, för det är ju jättehögt upp), och ser...`}</p>
      </SectionBlue>
      <h3>Vem då?</h3>
      <ImageButtonWrapper>
        {randomArray(friends)?.map((item) => (
          <ImageButton
            key={item?.id}
            onClick={() => onAnswerSubmit(item?.name, item?.image)}
            text={<img src={item?.image} alt={item?.name} />}
          />
        ))}
      </ImageButtonWrapper>
    </BaseContainer>
  );
};

export default BaseStory5;

const BaseContainer = styled.div`
  display: grid;
  padding: 2%;
  width: 80%;
  margin: 0 auto;

  h3 {
    margin-left: 2%;
  }
`;

const SectionBlue = styled.div`
  padding: 3% 9% 3%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
  min-height: 60vh;
  background-color: var(--blue);

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
