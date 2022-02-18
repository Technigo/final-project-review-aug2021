import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  @media (max-width: 768px) {
    border-bottom: none;
  }
`;
const NavLink = styled(Link)`
height:10px;
padding: 10px;
color: black;
text-decoration: none;
&:hover{
background-color: #878df7;
border-radius: 5px;
color: white;

}`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 35px;
    background: #20C6BA;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Nav isOpen={isOpen}>
      <NavLink to="/"> Home</NavLink>
        <NavLink to="/about"> About</NavLink>
        <NavLink to="/signin"> Log-in</NavLink>
        <NavLink to="/inspiration"> Inspiration</NavLink>
      </Nav>
    </NavContainer>
  );
};

export default Menu;
