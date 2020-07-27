import React, { Component } from 'react';
import { connect } from 'react-redux';
import { format , formatDate } from '../utils/helpers';
import { Link, withRouter} from 'react-router-dom'
// import Nav from './Nav'

class Question extends Component {
  handleVote = (e) => {
      e.preventDefault()

      const { dispatch, question, authedUser } = this.props
      
    // todo: _saveQuestionAnswer ({ authedUser, qid, answer }) in action
  }
  render() {
    const { question } = this.props
    // console.log(question)

    if (question === null){
        return <p>This question doesn't exist</p>
    }

    const {
        name, avatar, timestamp, optionOne,
        optionTwo, authedUser, id
    } = question
    return (
            <Link to={`/question/${id}`}className='question'>
                <img
                    width='100'
                    height='100' 
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                    />
                <div className='question-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        <div>
                            {optionOne.text} 
                            Votes: {optionOne.votes.length > 0 
                                ? optionOne.votes.map((user) => (
                                    <p key={user}> {user} </p>
                                ))
                                : '0'}
                        </div>
                        <div>
                            {optionTwo.text}
                            Votes: {optionTwo.votes.length > 0 
                                ? optionTwo.votes.map((user) => (
                                    <p key={user}> {user} </p>
                                ))
                                : '0'}
                        </div>
                    </div>
                </div>        
            </Link>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    return {
        authedUser,
        loading: questions === null,
        question: question
            ? format(question, users[question.author], authedUser)
            : null
    }
  }
  
  export default connect(mapStateToProps)(Question)