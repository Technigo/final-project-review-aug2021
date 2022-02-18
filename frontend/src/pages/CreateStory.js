import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showCharacters } from '../reducers/dynamicData';
import { shuffleArray } from '../utils/shuffleArray';
import storyElements from '../reducers/storyElements';
import BaseStoryRoof from '../components/BaseStoryRoof/BaseStoryRoof';
import styled from 'styled-components';

const CreateStory = () => {
  const characters = useSelector((store) => store.dynamicData?.characters);
  const selectedCharacter = useSelector(
    (store) => store.storyElements.selectedCharacter
  );
  const accessToken = useSelector((store) => store.user.accessToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCharacters());
  }, [dispatch]);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  // Listens to onClick and set the selectedCharacter
  const onAnswerSubmit = (name, image) => {
    dispatch(storyElements.actions.setSelectedCharacter({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
    navigate('/skapasaga');
  };

  if (selectedCharacter != null) {
    return <BaseStoryRoof />;
  } else {
    return (
      <CreateStoryContainer>
        <CreateStorySection>
          <h2>Vem ska din saga handla om?</h2>
        </CreateStorySection>
        <ImageButtonWrapper>
          {shuffleArray(characters).map((item) => (
            <ImageButton
              type="submit"
              key={item.id}
              onClick={() => onAnswerSubmit(item.name, item.image)}
            >
              {<img src={item.image} alt={item.image} />}
            </ImageButton>
          ))}
          {/* {selectedCharacter && <p>`You picked ${selectedCharacter}`</p>} */}
        </ImageButtonWrapper>
      </CreateStoryContainer>
    );
  }
};

export default CreateStory;

const CreateStoryContainer = styled.div`
  display: grid;
  row-gap: 10%;
  padding: 5% 2% 15% 2%;
  width: 80%;
  margin: 0 auto;
  margin-top: 3%;
  background-color: var(--yellow);
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
`;

const CreateStorySection = styled.section`
  text-align: center;
`;

const ImageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ImageButton = styled.button`
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
