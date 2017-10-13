import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getVacations } from '../reducers/vacations';

import VacationPackageForm from './VacationPackageForm';
import VacationPackagesList from './VacationPackagesList';

class VacationPackages extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getVacations();
  }


  removeVacation = (id) => {
    axios.delete(`http://localhost:8777/vacations/${id}`).then(response => {
      this.getVacations();
    })
  }

  render() {
    return (
      <div>
        <VacationPackageForm />
        <VacationPackagesList />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.vacations
}

let mapDispatchToProps = {
  getVacations
}

export default connect(mapStateToProps, mapDispatchToProps)(VacationPackages)
