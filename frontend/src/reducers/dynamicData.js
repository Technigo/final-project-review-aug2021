import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../utils/constants';
import rainbowLoader from './rainbowLoader';

export const dynamicData = createSlice({
  name: 'dynamicData',
  initialState: {
    characters: [],
    sounds: [],
    feelings: [],
    tools: [],
    places: [],
    friends: [],
    friendsNames: [],
  },
  reducers: {
    setCharacters: (store, action) => {
      store.characters = action.payload;
    },
    setSounds: (store, action) => {
      store.sounds = action.payload;
    },
    setFeelings: (store, action) => {
      store.feelings = action.payload;
    },
    setTools: (store, action) => {
      store.tools = action.payload;
    },
    setPlaces: (store, action) => {
      store.places = action.payload;
    },
    setFriends: (store, action) => {
      store.friends = action.payload;
    },
    setFriendsNames: (store, action) => {
      store.friendsNames = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  },
});

export const showCharacters = (accessToken) => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };
    fetch(API_URL('character'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setCharacters(data.response));
          dispatch(dynamicData.actions.setError(null));
        } else {
          dispatch(dynamicData.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showSounds = (accessToken) => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };
    fetch(API_URL('sound'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setSounds(data.response));
          dispatch(dynamicData.actions.setError(null));
        } else {
          dispatch(dynamicData.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showFeelings = (accessToken) => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };
    fetch(API_URL('feeling'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setFeelings(data.response));
          dispatch(dynamicData.actions.setError(null));
        } else {
          dispatch(dynamicData.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showTools = (accessToken) => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };
    fetch(API_URL('tool'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setTools(data.response));
          dispatch(dynamicData.actions.setError(null));
        } else {
          dispatch(dynamicData.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showPlaces = (accessToken) => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };
    fetch(API_URL('place'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setPlaces(data.response));
          dispatch(dynamicData.actions.setError(null));
        } else {
          dispatch(dynamicData.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showFriends = (accessToken) => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };
    fetch(API_URL('friend'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setFriends(data.response));
          dispatch(dynamicData.actions.setError(null));
        } else {
          dispatch(dynamicData.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showFriendsNames = (accessToken) => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };
    fetch(API_URL('friendname'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setFriendsNames(data.response));
          dispatch(dynamicData.actions.setError(null));
        } else {
          dispatch(dynamicData.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};
