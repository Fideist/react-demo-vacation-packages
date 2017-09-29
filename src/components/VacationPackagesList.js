import React from 'react';
import styled from 'styled-components';

import VacationPackage from './VacationPackage';

let VacationsWrapper = styled.div`
  display: flex;
`

let PageTitle = styled.div`
  text-align: center;
`

function VacationPackagesList(props) {
  return (
    <div>
      <PageTitle>
        <h1>Vacations</h1>
      </PageTitle>
      <VacationsWrapper>
        {props.vacations.map((vacation, index) => {
          return (
            <VacationPackage vacation={vacation} key={index} removeClickHandler={props.removeVacation}/>
          )
        })}
      </VacationsWrapper>
    </div>
  )
}

export default VacationPackagesList;
