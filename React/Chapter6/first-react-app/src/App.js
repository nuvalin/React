import React, { Component } from 'react';
import UserForm from './UserForm';


class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  render() {



    return (
      <div>

        <UserForm/>

      </div>
    );
  }
}
export default App;
