import React, { Component } from 'react';
import Nav from './Nav';
// import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom';

class AddQuestion extends Component {
    state = {
        text: '',
        toHome: false
    }
    handleChange = (e, type) => {
        const text = e.target.value

        this.setState(() => ({
            type
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { dispatch, id } = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo, id))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: id ? false : true
        }))
    }
    render(){
        const { optionOne, optionTwo, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/success' />
        }
    return (
            <div>
                <Nav />
                <h3>Create New Question</h3>
                <h4>Would you rather: </h4>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Option One" 
                        value={optionOne}
                        onChange={(e)=>this.handleChange(e,'optionOne')}
                        className='textarea'/>
                    <h4>OR</h4>    
                    <textarea 
                        placeholder="Option Two"/>
                    <button
                        className='btn'
                        type='submit'
                        disabled={optionOne || optionTwo === ''}>
                        Submit
                    </button>
                </form>
            </div>
          );
    }
}

export default AddQuestion;
