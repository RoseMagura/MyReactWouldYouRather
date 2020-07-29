import React, { Component } from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { addQuestion } from '../actions/questions';
import { formatQuestion } from '../utils/_DATA.js';
import { Redirect } from 'react-router-dom';

class AddQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false, 
        disabled: true
    }
    handleChange = (e, type) => {
        const text = e.target.value
        this.setState({
            [type]: text
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state
        const { dispatch, id, authedUser } = this.props
        const question = formatQuestion({optionOneText, optionTwoText,
            author: authedUser})
        
        dispatch(addQuestion(question))    
            
        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            // toHome: id ? false : true
        }))
    }
    render(){
        const { optionOneText, optionTwoText, toHome } = this.state
        if (toHome === true) {
            return <Redirect to='/' />
        }
    return (
            <div>
                <Nav />
                <h3>Create New Question</h3>
                <h4>Would you rather: </h4>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Option One" 
                        value={optionOneText}
                        onChange={(e)=>this.handleChange(e, 'optionOneText')}
                        className='textarea'/>
                    <h4>OR</h4>    
                    <textarea 
                        placeholder="Option Two"
                        value={optionTwoText}
                        onChange={(e)=>this.handleChange(e, 'optionTwoText')}
                        />
                    <button
                        className='btn'
                        type='submit'
                        disabled={!optionOneText || !optionTwoText}
                        >
                        Submit
                    </button>
                </form>
            </div>
          );
    }
}

function mapStateToProps ({ authedUser}) {
    return {
        authedUser,
    }
  }
  
  export default connect(mapStateToProps)(AddQuestion)
