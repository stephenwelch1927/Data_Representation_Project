import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class HolidayItem extends React.Component {

    constructor() {
        super();
        this.DeleteHoliday = this.DeleteHoliday.bind(this);
    }
    //DeleteHoliday function that deletes a record and posts to server
    DeleteHoliday(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/holiday/add/' + this.props.holiday._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        //Bootstrap card to display all the details and has delete and update buttons
        return (
            <div>

            <center><Card border="dark" style={{ width: '50rem' }} >
                    <Card.Header>Holiday Experience</Card.Header>
                    <Card.Body>
                        <Card.Title><label>Country Visited: </label>{this.props.holiday.Destination}</Card.Title>
                        <Card.Text>
                            <h6><label>Trip Duration: </label>{this.props.holiday.Duration}</h6>
                        </Card.Text>
                        <Card.Text>
                        {this.props.holiday.Description}
                        </Card.Text>
                        <Button variant="danger" onClick={this.DeleteHoliday}>Remove Holiday</Button>
                        <Link to={"/updateHoliday/" + this.props.holiday._id}
                                className="btn btn-primary">Update Holiday</Link>
                    </Card.Body>
                </Card>
            </center>     
                <br />

            </div>
        );
    }
}