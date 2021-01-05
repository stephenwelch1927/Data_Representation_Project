import React from 'react';
import{HolidayItem} from './components/holidayItem';

export class Holidays extends React.Component{

    render(){
        return this.props.holidays.map( (holiday)=>{
            return <HolidayItem holiday={holiday} ReloadData={this.props.ReloadData}></HolidayItem>
        })
    }
}