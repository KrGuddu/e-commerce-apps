import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
    return (
      <MainHeader>  {/* nav ko as a MainHeader use kiya h */}
        <NavLink to="/">  {/* here,  to="/"   is use for where you can go.defaulty it is on home page.==>>jaha jana h usko likhe. eg  to="/home" */}
          {/* <img src="./images/logo.png" alt="my logo img" /> */}
          <img src="./images/logo.png" alt="my logo img" />
        </NavLink>
        <Nav />
      </MainHeader>
    );
  };
  
  const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;