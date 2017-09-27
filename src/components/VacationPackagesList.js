import React from 'react';

function VacationPackagesList(props) {
  return (
    <div>
      <h1>Vacations</h1>

      {props.vacations.map((vacation, index) => {
        return (
          <div key={index}>
            <img src={vacation.image_url} />
            <h3> LOCATION: {vacation.location} </h3>
            <p> TYPE: {vacation.type} </p>
            <p> DAYS: {vacation.days} </p>
            <p> {vacation.description} </p>
            <button onClick={() => {props.removeVacation(vacation.id)}}>delete</button>
            <br/>
            <br/>
            <br/>
          </div>
        )
      })}
    </div>
  )
}

export default VacationPackagesList;
