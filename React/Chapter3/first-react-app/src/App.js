import React, { Component } from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';

class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  render() {
    const isValid = true;

 
    return (
      <div>

        <Products />
        <Button>Default</Button>
        <Button variant="danger">Default</Button>
        <Button variant="primary" disabled={!isValid}>Default</Button>
        <Rating rating="1"/>
 <Rating rating="2"/>
 <Rating rating="3"/>
 <Rating rating="4"/>
 <Rating rating="5"/>
      </div>
    );
  }
}
export default App;
