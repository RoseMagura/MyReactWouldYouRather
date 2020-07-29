import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { format , formatDate } from '../utils/helpers';
// import { Link, withRouter} from 'react-router-dom'
import { handleSaveAnswer } from '../actions/shared';
import Nav from './Nav'

class Question extends Component {
    state = {
        choice: ''
    }
  handleChange = (e) => {
      this.setState({choice: e.target.value})
  }  
  handleSubmit = (e) => {
      e.preventDefault()
      console.log('submit')
      const qid = this.props.location.pathname.split('/').pop()
      const { dispatch, authedUser, users, questions } = this.props
      const answer = this.state.choice
      dispatch(handleSaveAnswer(authedUser, qid, answer, 
                                users, questions))
  }
  render() {
    const { questions, users } = this.props
    const id = this.props.location.pathname.split('/').pop()
    const question = questions[id]
    if (question === undefined) {
        return <p>error</p>
    }
    if (question === null){
        return <p>This question doesn't exist</p>
    }
    const author = question['author']
    const formattedAuthor = users[author]['name']
    const avatar = users[author]['avatarURL']
    return (
        <div>
            <Nav /> 
                <div className='question-info'>
                    <span>{formattedAuthor} asks:</span><br/>
                    <img 
                        width='100'
                        height='100' 
                        src={avatar}
                        alt={`Avatar of ${formattedAuthor}`}
                        className='avatar'
                        />
                    <h2>Would You Rather...</h2>           
                    <form>
                        <div className='form-check'> 
                            <label>
                            <input 
                                type='radio'
                                name='voting-group'
                                value='optionOne'
                                className='form-check-input'
                                onChange={this.handleChange}/>    
                                {question['optionOne']['text']}
                            </label>
                        </div>
                        <div className='form-check'> 
                            <label>
                            <input 
                                type='radio'
                                name='voting-group'
                                value='optionTwo'
                                className='form-check-input'
                                onChange={this.handleChange}/>    
                                {question['optionTwo']['text']}
                            </label>
                        </div>      
                        <div className='form-group'>
                          <button className='form-submit' 
                                    type='submit'
                                    onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </div>                  
                    </form>
                    </div>
                </div>        
    )
  }
}

function mapStateToProps ({ dispatch, authedUser, questions, users }) {
    return {
        dispatch,
        authedUser,
        questions,
        users,
        loading: questions === null,
    }
  }
  
  export default connect(mapStateToProps)(Question)