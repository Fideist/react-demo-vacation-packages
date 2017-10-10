import React, { Component } from 'react';
import styled from 'styled-components';

let Input = styled.input`
padding: 5px;
font-size: 14px;
height: 30px;
width: 400px;
border: 1px solid;
margin: 5px 0;
`;

let FormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 50px;
`;

let Button = styled.button`
height: 30px;
background: lightgreen;
font-size 14px;

`;

export default class Login extends Component {
  render() {
    return (
      <FormWrapper>
        <Input
          name="location"
          placeholder="email"/>

        <Input
          name="type"
          placeholder="password"/>

        <Button>login</Button>
      </FormWrapper>
    )
  }
}
