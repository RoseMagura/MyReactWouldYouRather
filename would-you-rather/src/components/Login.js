import React, { Component } from 'react';
import User from './User';
import Select from 'react-select';

class Login extends Component {
    state = {
        authUser: '',
        selected: ''
    }
    handleChange = (e) => {
        // send to store instead
        this.setState({authUser: e.value})
        this.setState({selected: e})
        // console.log(e.label)
    }
    updateState(element) {
        this.setState({authUser: element})
    }
    render(){
        const { allUsers } = this.props.users
        const authUser = this.state.authUser
        // Replace later with information from store
        const optionsArray = []
        this.props.users.forEach(element => {
            optionsArray.push({ value: element.toLowerCase(),
                                label: element})
        })
        return (
            <div>
                <h1> Select User to Login: </h1>
                <Select 
                    name='user-field'
                    onChange={(e) => {this.handleChange(e)}}
                    value={this.state.selected}
                    options={optionsArray}/>
                <div className='login-success'> 
                    {authUser !== '' && 
                        <div> 
                            <h3>
                                Welcome, {authUser.charAt(0).toUpperCase() +
                                authUser.slice(1)}!
                            </h3>
                            <button>
                                To Home Page
                            </button>
                        </div>}
                </div>
            </div>
          );
    }
}

export default Login;
