import React, { Component } from 'react';
import axios from 'axios';

export default class VacationPackageForm extends Component {
  constructor() {
    super();

    this.state = {
      vacationPackage: {
        location: '',
        type: '',
        days: '',
        imageUrl: '',
        description: ''
      }
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let newVacationPackage = Object.assign({}, this.state.vacationPackage);
    newVacationPackage[name] = value;

    this.setState({
      vacationPackage: newVacationPackage
    })
  }

  handleSubmit = () => {
    axios.post('http://localhost:8777/packages', this.state.vacationPackage).then(response => {
      console.log('response', response);
      this.props.updateParentList(response.data);
    })
  }

  render() {
    return (
      <div>
        <input
          name="location"
          value={this.state.vacationPackage.location}
          placeholder="location"
          onChange={this.handleChange}/>

        <input
          name="type"
          value={this.state.vacationPackage.type}
          placeholder="type"
          onChange={this.handleChange}/>

        <input
          name="days"
          value={this.state.vacationPackage.days}
          placeholder="days"
          onChange={this.handleChange}/>

        <input
          name="imageUrl"
          value={this.state.vacationPackage.imageUrl}
          placeholder="imageUrl"
          onChange={this.handleChange}/>

        <textarea
          name="description"
          value={this.state.vacationPackage.description}
          placeholder="description"
          onChange={this.handleChange}/>

        <button onClick={this.handleSubmit}>create vacation package</button>
      </div>
    )
  }
}
