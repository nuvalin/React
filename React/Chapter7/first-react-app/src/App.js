import React, { Component } from 'react';
import GitHub from './GitHub';


class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  render() {



    return (
      <div>

      
        <GitHub />

      </div>
    );
  }
}
export default App;
