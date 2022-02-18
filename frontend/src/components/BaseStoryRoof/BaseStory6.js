import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showFriendsNames } from '../../reducers/dynamicData';
import StoryButton from '../../styledComponents/StoryButton';
import { randomArray } from '../../utils/randomArray';
import styled from 'styled-components';

const BaseStory6 = () => {
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound
  );
  const friend = useSelector(
    (store) => store.storyElements.selectedElements.friend
  );
  const friendsNames = useSelector((store) => store.dynamicData.friendsNames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showFriendsNames());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    dispatch(storyElements.actions.setSelectedFriendsName({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };

  // gets random objects from elements-array and push it to a new array
  // const randomObjects = () => {
  //   const randomFriendsName = [];
  //   for (var i = 0; i < 5; i++) {
  //     const randomIndex = Math.floor(Math.random() * friendsNames.length);
  //     const object = friendsNames[randomIndex];
  //     if (!randomFriendsName.includes(object)) {
  //       randomFriendsName.push(object);
  //     }
  //   }
  //   return randomFriendsName;
  // };

  return (
    <BaseContainer>
      <SectionGreen>
        <ImageContainer>
          <img src={friend.image} alt={friend.name} />
        </ImageContainer>
        <p>{`Där sitter en ${friend.name} och skalar nötter. Tänk att ett ${sound.name} kom från de här små nötterna. – Hej, säger ${friend.name}n. Jag heter...`}</p>
      </SectionGreen>

      <h3>Vad heter den?</h3>
      <StoryButtonWrapper>
        {randomArray(friendsNames)?.map((item) => (
          <StoryButton
            key={item?.name}
            onClick={() => onAnswerSubmit(item?.name, item?.image)}
            text={item?.name}
          />
        ))}
      </StoryButtonWrapper>
    </BaseContainer>
  );
};

export default BaseStory6;

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
  margin: 0 auto;
  justify-content: center;
`;
