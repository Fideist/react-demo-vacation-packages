import React, { Component } from 'react';
import axios from 'axios';

class VacationPackages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vacationPackages: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8777/packages').then(response => {
      this.setState({
        vacationPackages: response.data
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Vacations</h1>

        {this.state.vacationPackages.map((vacation, index) => {
          return (
            <div>
              <img src={vacation.imageUrl} />
              <h3> LOCATION: {vacation.location} </h3>
              <p> TYPE: {vacation.type} </p>
              <p> DAYS: {vacation.days} </p>
              <p> {vacation.description} </p>
              <br/>
              <br/>
              <br/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default VacationPackages;
