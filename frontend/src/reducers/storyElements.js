import { createSlice } from '@reduxjs/toolkit';
// reducer that stores the users selection of characters/elements
const initialState = {
  selectedCharacter: null,
  selectedElements: {
    sound: {
      name: null,
      image: null,
    },
    feeling: {
      name: null,
      image: null,
    },
    tool: {
      name: null,
      image: null,
    },
    place: {
      name: null,
      image: null,
    },
    friend: {
      name: null,
      image: null,
    },
    friendsName: {
      name: null,
      image: null,
    },
  },
  storyPage: 0,
};

const storyElements = createSlice({
  name: 'storyElements',
  initialState,

  reducers: {
    setSelectedCharacter: (store, action) => {
      store.selectedCharacter = action.payload;
    },
    setSelectedSound: (store, action) => {
      store.selectedElements.sound = action.payload;
    },
    setSelectedFeeling: (store, action) => {
      store.selectedElements.feeling = action.payload;
    },
    setSelectedTool: (store, action) => {
      store.selectedElements.tool = action.payload;
    },
    setSelectedPlace: (store, action) => {
      store.selectedElements.place = action.payload;
    },
    setSelectedFriend: (store, action) => {
      store.selectedElements.friend = action.payload;
    },
    setSelectedFriendsName: (store, action) => {
      store.selectedElements.friendsName = action.payload;
    },
    setStoryPage: (store) => {
      store.storyPage += 1;
    },

    restartGame: (store) => {
      return initialState;
    },
  },
});

export default storyElements;
