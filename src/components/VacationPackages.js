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
    axios.get('http://localhost:8777/packages').then(response => {
      this.setState({
        vacationPackages: response.data
      })
    })
  }

  updateList = (vacations) => {
    this.setState({
      vacationPackages: vacations
    })
  }

  removeVacation = (index) => {
    axios.delete(`http://localhost:8777/packages/${index}`).then(response => {
      this.setState({
        vacationPackages: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <VacationPackageForm updateParentList={this.updateList}/>
        <VacationPackagesList vacations={this.state.vacationPackages} removeVacation={this.removeVacation}/>
      </div>
    )
  }
}
