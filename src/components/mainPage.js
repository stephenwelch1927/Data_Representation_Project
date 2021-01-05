import React from 'react';
import holiday from'../images/holiday2.jpg';


export class mainPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome To The Holiday Experience Web Site</h1>
                <img src={holiday} width="1600" height="800" alt="Holiday on the Beach"></img>
            </div>
        );
    }

}