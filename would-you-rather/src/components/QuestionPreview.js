import React, { Component } from 'react';
import { connect } from 'react-redux';
import { format } from '../utils/helpers';
import { Link} from 'react-router-dom'

class QuestionPreview extends Component {
  render() {
    const { question } = this.props
    if (question === null){
        return <p>This question doesn't exist</p>
    }
    const { name, avatar, optionOne, id } = question
    return (
            <div>
                 <img
                    width='100'
                    height='100' 
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                    />
                <div className='question-info'>
                    <div>
                        <span>{name} asks: </span>
                        <div>
                            Would you rather <br/>
                            ...{optionOne.text}... 
                        </div>
                <Link to={`/question/${id}`}className='question'>
                    View Question
                </Link>
                    </div>
                </div>    
            </div>        
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    return {
        authedUser,
        question: question
            ? format(question, users[question.author], authedUser)
            : null
    }
  }
  
  export default connect(mapStateToProps)(QuestionPreview)