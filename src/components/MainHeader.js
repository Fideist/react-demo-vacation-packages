import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let HeaderWrapper = styled.div`
  height: 80px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

let Logo = styled.div`
  font-size: 40px;
  flex: 2
`;

let NavBar = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export default function MainHeader() {
  return (
    <HeaderWrapper>
      <Logo>V</Logo>
      <NavBar>
        <Link to="/vacations">vacations</Link>
        <Link to="/login">login</Link>
      </NavBar>
    </HeaderWrapper>
  )
}
