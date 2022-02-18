import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import user from './reducers/user';
import { dynamicData } from './reducers/dynamicData';
import storyElements from './reducers/storyElements';

import Login from './pages/Login';
import NotFound from './components/NotFound';
import Main from './pages/Main';
import CreateStory from './pages/CreateStory';
import Bookshelf from './pages/Bookshelf';
import About from './pages/About';
import Navbar from './components/Navbar';

const reducer = combineReducers({
  user: user.reducer,
  dynamicData: dynamicData.reducer,
  storyElements: storyElements.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/skapasaga" element={<CreateStory />} />
          <Route path="/bokhylla" element={<Bookshelf />} />
          <Route path="/om" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
