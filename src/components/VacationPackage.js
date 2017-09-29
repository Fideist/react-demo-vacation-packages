import React from 'react';
import styled from 'styled-components';

let VacationPackage = styled.div`
  width: 500px;
  border: 1px solid black;
  margin: 20px;
  padding: 10px;
`;

export default function(props) {
  let vacation = props.vacation;

  let Img = styled.div`
    background-image: url(${vacation.image_url});
    height: 300px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  return (
    <VacationPackage>
      <Img />
      <h3> LOCATION: {vacation.location} </h3>
      <p> TYPE: {vacation.type} </p>
      <p> DAYS: {vacation.days} </p>
      <p> {vacation.description} </p>
      <button onClick={() => {props.removeClickHandler(vacation.id)}}>delete</button>
      <br/>
      <br/>
      <br/>
    </VacationPackage>
  )
}
