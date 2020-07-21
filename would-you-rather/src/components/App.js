import React, { Component } from 'react';
import '../App.css';
import Login from './Login';

class App extends Component {
    render(){
        return (
            <div>
                <Login users={['Sarah', 'Tyler', 'John']}/>
            </div>
          );
    }
}

export default App;
