import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import background from '../images/background.jpg'; 

export class addExperience extends React.Component {
  constructor() {
    super();
    //Constructor to set the variables
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHolidayDestination = this.onChangeHolidayDestination.bind(this);
    this.onChangeHolidayDuration = this.onChangeHolidayDuration.bind(this);
    this.onChangeHolidayDescription = this.onChangeHolidayDescription.bind(this);
    
    //Set the state with variables
    this.state = {
      Destination: '',
      Duration: '',
      Description: ''
    }
  }

    onChangeHolidayDestination(e) {
    this.setState({
      Destination: e.target.value
    });
  }

  onChangeHolidayDuration(e) {
    this.setState({
      Duration: e.target.value
    });
  }

  onChangeHolidayDescription(e) {
    this.setState({
      Description: e.target.value
    });
  }
  
  //On submit that will alert input
  onSubmit(e) {
    e.preventDefault();
    alert("Holiday:" + this.state.Destination + " " + this.state.Duration + " " +
      this.state.Description);

    const newHoliday = {
      Destination: this.state.Destination,
      Duration: this.state.Duration,
      Description: this.state.Description
    };
    
    //Axios post to post data to the server side
    axios.post('http://localhost:4000/holiday/add', newHoliday)
    .then(response => console.log(response.data))
    .catch(error => console.log(error)); 

  }
  render() {
    return (
      //Bootstrap form that gets data from user and updates it
      <div>
        <img src={background} width="1600" height="500" alt="Holiday on the Beach"></img>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Holiday Destination</Form.Label>
            <Form.Control type="text" value={this.state.Destination}
            onChange={this.onChangeHolidayDestination} placeholder="eg USA" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Holiday Duration</Form.Label>
            <Form.Control type="text" value={this.state.Duration}
            onChange={this.onChangeHolidayDuration} placeholder="eg 2 weeks" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Describe Your Experience</Form.Label>
            <Form.Control as="textarea" value={this.state.Description} 
            onChange={this.onChangeHolidayDescription} rows={3} placeholder="Type Your experience here" />
          </Form.Group>
          <input type='submit' value='Add Holiday' className='btn btn-success'></input>

        </Form>
      </div>
    );
  }

}