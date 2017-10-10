import React, { Component } from 'react';
import axios from 'axios';

import VacationPackageForm from './VacationPackageForm';
import VacationPackagesList from './VacationPackagesList';

export default class VacationPackages extends Component {
  constructor() {
    super();

    this.state = {
      vacationPackages: []
    }
  }

  componentDidMount() {
    this.getVacations();
  }

  getVacations = () => {
    axios.get('http://localhost:8777/vacations').then(response => {
      this.setState({
        vacationPackages: response.data
      })
    })
  }

  removeVacation = (id) => {
    axios.delete(`http://localhost:8777/vacations/${id}`).then(response => {
      this.getVacations();
    })
  }

  render() {
    return (
      <div>
        <VacationPackageForm updateParentList={this.getVacations}/>
        <VacationPackagesList vacations={this.state.vacationPackages} removeVacation={this.removeVacation}/>
      </div>
    )
  }
}
