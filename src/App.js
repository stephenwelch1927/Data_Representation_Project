import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar, Nav } from'react-bootstrap';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { lookUpHoliday } from './components/lookUpHoliday';
import { mainPage } from './components/mainPage';
import { addExperience } from './components/addExperience';
import { UpdateHoliday } from './components/updateHoliday';
import { Contact } from './components/contact';


function App() {
  return (
    <Router>
    <div className="App">
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Holiday Experiences</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/lookUpHolidayExperience">Holiday Experiences Told By You</Nav.Link>
      <Nav.Link href="/addYourOwnExperience">Add Your Own Experiences</Nav.Link>
      <Nav.Link href="/contactUs">Contact Our Team</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    <Switch>
      <Route path='/' component={mainPage} exact />
      <Route path='/lookUpHolidayExperience' component={lookUpHoliday} />
      <Route path='/addYourOwnExperience' component={addExperience} />
      <Route path='/updateHoliday/:id' component={UpdateHoliday} />
      <Route path='/contactUs' component={Contact} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
