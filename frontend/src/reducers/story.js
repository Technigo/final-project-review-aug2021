import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../utils/constants';
import rainbowLoader from './rainbowLoader';

// how to store blueprintStory, should this be hardcoded in a storyComponent instead?

export const story = createSlice({
  name: 'story',
  initialState: {
    // items: []
    _id: null,
    savedElementsArray: null,
    savedCharacter: null,
    savedStoryList: []
  },
  reducers: {
    // setItems: (store, action) => {
    //   store.items = action.payload;
    // },
    setSavedElementsArray: (store, action) => {
      store.savedElementsArray = action.payload;
    },
    setSavedCharacter: (store, action) => {
      store.savedCharacter = action.payload;
    },
    setSavedStoryList: (store, action) => {
      store.savedStoryList = action.payload;
    },

    setError: (store, action) => {
      store.error = action.payload;
    }
  }
});

//marias test
export const showStoryCollection = (accessToken, userId) => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    };
    fetch(API_URL(`storycollection/${userId}`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(story.actions.setSavedStoryList(data.response));
          dispatch(story.actions.setError(null));
        } else {
          dispatch(story.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

//idas sparade
// export const showStory = (accessToken, userId) => {
//   return (dispatch) => {
//     dispatch(rainbowLoader.actions.setLoading(true));
//     const options = {
//       method: 'GET',
//       headers: {
//         Authorization: accessToken,
//       },
//     };
//     fetch(API_URL(`storycollection/${userId}`), options)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           dispatch(story.savedStoryList.setCharacters(data.response));
//           dispatch(story.savedStoryList.actions.setError(null));
//         } else {
//           dispatch(story.savedStoryList.actions.setError(data.response));
//         }
//       })
//       .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
//   };
// };

// accessToken byts ut, använd userId sparar data
export const onPostStory = (accessToken, storyArray, savedCharacter) => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({
        description: storyArray,
        character: savedCharacter
      })
    };
    fetch(API_URL('storycollection'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(story.actions.setError(null));
        } else {
          dispatch(story.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};
