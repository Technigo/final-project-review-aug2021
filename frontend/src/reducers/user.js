import { createSlice } from '@reduxjs/toolkit';
// import rainbowLoader from './rainbowLoader';
// import { API_URL } from '../utils/constants';

const user = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    username: null,
    accessToken: null,
    error: null,
    storyCollection: null
    // storyCollection?
  },
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setStoryCollection: (store, action) => {
      store.storyList = action.payload;
    }
  }
});

export default user;

// export const showStoryCollection = (accessToken, userId, storyCollection) => {
//   return (dispatch) => {
//     dispatch(rainbowLoader.actions.setLoading(true));
//     const options = {
//       method: 'GET',
//       headers: {
//         Authorization: accessToken
//       },
//       body: JSON.stringify({
//         description: storyCollection
//       })
//     };
//     fetch(API_URL(`storycollection/${userId}`), options)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           dispatch(user.storyCollection.setStoryCollection(data.response));
//           dispatch(user.storyCollection.actions.setError(null));
//         } else {
//           dispatch(user.storyCollection.actions.setError(data.response));
//         }
//       })
//       .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
//   };
// };
