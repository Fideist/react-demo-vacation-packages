import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import VacationPackage from './VacationPackage';

let VacationsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
        {props.data.map((vacation, index) => {
          return (
            <VacationPackage vacation={vacation} key={index}/>
          )
        })}
      </VacationsWrapper>
    </div>
  )
}

export default connect(state => state.vacations)(VacationPackagesList);
