import React, { Component } from 'react';
import { connect } from 'react-redux';
// import User from './User';
import { setAuthedUser } from '../actions/authedUser';
import { handleUserData, handleQuestionData, 
         handleInitialUser } from '../actions/shared';
import Select from 'react-select';

class Login extends Component {
    componentDidMount () {
        // console.log('IM RUNNING')
        this.props.dispatch(handleUserData())
        this.props.dispatch(handleQuestionData())
        this.props.dispatch(handleInitialUser())
    }
    state = {
        selected: ''
    }
    handleChange = (e) => {
        const { dispatch } = this.props
        dispatch(setAuthedUser(e.value))
        this.setState({selected: e})
        window.location.href=
            `http://localhost:3000/success/user?${e.value}`
    }
    updateState(element) {
        this.setState({authUser: element})
    }
    render(){
        console.log('PROPS: ', this.props)
        const authUser = this.props.authedUser
        // console.log(authUser)
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
                    onChange={(e) => {this.handleChange(e)}}
                    value={this.state.selected}
                    options={optionsArray}/>
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
