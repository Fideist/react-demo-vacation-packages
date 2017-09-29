import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

let Input = styled.input`
padding: 5px;
font-size: 14px;
height: 30px;
width: 400px;
border: 1px solid;
margin: 5px 0;
`;

let Textarea = styled.textarea`
padding: 5px;
font-size: 14px;
height: 100px;
width: 400px;
border: 1px solid black;
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
    axios.post('http://localhost:8777/vacations', this.state.vacationPackage).then(response => {
      this.props.updateParentList(response.data);
    })
  }

  render() {
    return (
      <FormWrapper>
        <Input
          name="location"
          value={this.state.vacationPackage.location}
          placeholder="location"
          onChange={this.handleChange}/>

        <Input
          name="type"
          value={this.state.vacationPackage.type}
          placeholder="type"
          onChange={this.handleChange}/>

        <Input
          name="days"
          value={this.state.vacationPackage.days}
          placeholder="days"
          onChange={this.handleChange}/>

        <Input
          name="imageUrl"
          value={this.state.vacationPackage.imageUrl}
          placeholder="imageUrl"
          onChange={this.handleChange}/>

        <Textarea
          name="description"
          value={this.state.vacationPackage.description}
          placeholder="description"
          onChange={this.handleChange}/>

        <Button onClick={this.handleSubmit}>create vacation package</Button>
      </FormWrapper>
    )
  }
}
