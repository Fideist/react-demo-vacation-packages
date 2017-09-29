import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

import About from './About';
import Contact from './Contact';

let HomePageWrapper = styled.div`
  margin: 20px;
  background: lightgreen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home(props) {
  return (
    <HomePageWrapper>
      <h1>Home Page</h1>
      <Link to="/about">about us </Link>
      <Link to="/contact">contact us </Link>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </HomePageWrapper>
  )
}
