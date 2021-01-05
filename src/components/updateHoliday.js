import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';


export class UpdateHoliday extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHolidayDestination = this.onChangeHolidayDestination.bind(this);
    this.onChangeHolidayDuration = this.onChangeHolidayDuration.bind(this);
    this.onChangeHolidayDescription = this.onChangeHolidayDescription.bind(this);

    this.state = {
      Destination: '',
      Duration: '',
      Description: ''
    }
  }
  //ComponentDidMount that retrieves data through _id
  componentDidMount(){
    console.log(this.props.match.params.id);

    axios.get('http://localhost:4000/holiday/add/'+this.props.match.params.id)
    .then(response =>{
      this.setState({
        Destination:response.data.Destination,
        Duration:response.data.Duration,
        Description:response.data.Description,
        _id:response.data._id
      })
    })
    .catch((err)=> {
      console.log(err);
    });
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

  onSubmit(e) {
    e.preventDefault();
    alert("Holiday:" + this.state.Destination + " " + this.state.Duration + " " +
      this.state.Description);

    const newHoliday = {
      Destination: this.state.Destination,
      Duration: this.state.Duration,
      Description: this.state.Description,
      _id: this.state._id
    };

    axios.put('http://localhost:4000/holiday/add/'+this.state._id, newHoliday)
    .then(res =>{ 
        console.log(res.data)
    })
    .catch(error => console.log(error)); 

    }
  render() {
    //Form to to update a record in the database
    return (
      <div>
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
            onChange={this.onChangeHolidayDescription} rows={3} />
          </Form.Group>
          <input type='submit' value='Update Holiday' className='btn btn-primary'></input>

        </Form>
      </div>
    );
  }

}