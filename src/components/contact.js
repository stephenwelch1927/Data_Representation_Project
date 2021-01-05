import React from 'react';
import holiday from'../images/background2.jpg';

const image={
     backgroundImage:'url('+holiday+')'   
}
//Contact Page with image and contact details
export class Contact extends React.Component{

    render(){
        return(
            <div>
                <img src={holiday} width="1600" height="800" alt="Mountains"></img>
                <h2>Email: holidayexpereince@gmail.com</h2>
            </div>
            
        );
    }

}