import React, { Component } from 'react';
import { connect } from 'react-redux';
// import User from './User';
import { setAuthedUser } from '../actions/authedUser';
import { handleUserData, handleQuestionData, 
         setLoggedInUser, handleInitialUser } from '../actions/shared';
import Select from 'react-select';
import Homepage from './Homepage';
// import { Router, Route, Link } from 'react-router-dom';

class Login extends Component {

    state = {
        selected: ''
    }
    handleLogin = (e) => {
        const { dispatch, history } = this.props
        dispatch(setLoggedInUser(this.state.selected.value))
        history.push('/success')
    }
    updateState(element) {
        this.setState({authUser: element})
        this.setState({selected: element})
    }
    render(){
        const optionsArray = []
        this.props.usersIds.forEach(element => {
            optionsArray.push({ value: element,
                                label: element})
        })
        return (
            <div>
                <h1> Select User to Login: </h1>
                <Select 
                    name='user-field'
                    onChange={(e) => this.updateState(e)}
                    value={this.state.selected}
                    options={optionsArray}/>
                <button onClick={this.handleLogin}>
                    Sign In 
                </button>    
            </div>
          );
    }
}

function mapStateToProps ({ users, authedUser }) {
    return {
      usersIds: Object.keys(users),
      authedUser
    }
  }
  
  export default connect(mapStateToProps)(Login) 
