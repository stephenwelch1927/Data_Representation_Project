import React from 'react';
import axios from 'axios';
import{Holidays} from '../holidays';



export class lookUpHoliday extends React.Component{
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        holidays: []
    };

    ReloadData(){
        axios.get('http://localhost:4000/holiday/add')
        .then((response) => {
            this.setState({holidays: response.data})
        })
        .catch((error) => {
            console.log(error)
        });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/holiday/add')
        .then((response) => {
            this.setState({holidays: response.data})
        })
        .catch((error) => {
            console.log(error)
        }); 
    }
    render(){
        
        
           
            return(<Holidays holidays={this.state.holidays} ReloadData={this.ReloadData}></Holidays>
            
        );
    }

}