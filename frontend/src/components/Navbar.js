import React from 'react';
import { useSelector } from 'react-redux';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import styled from 'styled-components';

const Navbar = () => {
  const username = useSelector((store) => store.user.username);
  const accessToken = useSelector((store) => store.user.accessToken);

  return (
    <>
      <Nav>
        <BurgerMenu />
        {accessToken && (
          <NavBarText>
            inloggad som: <span>{username}</span>
          </NavBarText>
        )}
      </Nav>
    </>
  );
};
// };

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--background);
  height: 60px;
`;

const NavBarText = styled.p`
  color: var(--attribute);
  font-size: 11px;
  align-self: center;
  margin-left: 25px;
  margin-right: 10px;

  @media (min-width: 767px) {
    font-size: 14px;
  }
`;
