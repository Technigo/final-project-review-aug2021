import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import user from '../../reducers/user';

const BurgerList = ({ close }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

  const onCreateStoryClick = () => {
    navigate('/skapasaga');
    dispatch(storyElements.actions.restartGame());
  };
  const onBookshelfClick = () => {
    navigate('/bokhylla');
  };
  const onStartClick = () => {
    dispatch(storyElements.actions.restartGame());
    navigate('/');
  };
  const onAboutClick = () => {
    navigate('/om');
  };
  const onLogout = () => {
    dispatch(user.actions.setAccessToken(null));
    navigate('/');
  };

  const onLogin = () => {
    navigate('/');
  };

  if (!accessToken) {
    return (
      <div className="menu">
        <ul>
          <li onClick={close}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onLogin}>Logga in/Skapa konto</p>
            </NavLink>
          </li>
          <li onClick={close}>
            <NavLink
              to="/om"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onAboutClick}>Om | About</p>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <ul>
          <li onClick={close}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onStartClick}>Start</p>
            </NavLink>
          </li>
          <li onClick={close}>
            {' '}
            <NavLink
              to="/skapasaga"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onCreateStoryClick}>Ny saga</p>
            </NavLink>
          </li>
          <li onClick={close}>
            <NavLink
              to="/bokhylla"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onBookshelfClick}>Bokhylla</p>
            </NavLink>
          </li>
          <li onClick={close}>
            <NavLink
              to="/om"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onAboutClick}>Om sagoväljaren</p>
            </NavLink>
          </li>
          <li onClick={close}>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onLogout}>Logga ut</p>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
};

export default BurgerList;
