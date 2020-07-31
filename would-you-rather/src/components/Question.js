import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/shared';
import Nav from './Nav'
import Votes from './Votes'

class Question extends Component {
    state = {
        choice: '',
        completed: false
    }

  handleChange = (e) => {
      this.setState({choice: e.target.value})
  }  
  setInitialChoice = (id) => {
    const { users, authedUser } = this.props
    const selected = users[authedUser]['answers'][id]
    selected !== undefined && this.setState({choice: selected})    
  }
  showResults = (answer, questions, qid, users) => {
    const chosen = questions[qid][answer]
    const username = questions[qid]['author']
    const author = users[username]
    const other = answer === 'optionOne'
      ? questions[qid]['optionTwo']
      : questions[qid]['optionOne']
    const total = chosen['votes'] !== undefined &&
        other['votes'] !== undefined &&
        chosen['votes'].length + other['votes'].length
    return(<Votes author={author}
                  chosen={chosen} other={other} total={total} />)
}       
  handleSubmit = (e) => {
      e.preventDefault()
      const qid = this.props.location.pathname.split('/').pop()
      const { authedUser, users, questions, dispatch } = this.props
      const answer = this.state.choice
      dispatch(handleSaveAnswer(authedUser, qid, answer, 
                                users, questions))
  }
  componentDidMount() {
      const id = this.props.location.pathname.split('/').pop()
      this.setInitialChoice(id)
  }
  render() {
    const { questions, users, authedUser } = this.props
    const id = this.props.location.pathname.split('/').pop()
    const answer = this.state.choice
    const userHasAnswered = Object.keys(users[authedUser]['answers'])
        .includes(id)

    const question = questions[id]
    if (question === undefined){
        return <div> <Nav /> <h3>404 - Not found</h3></div>
    }
    const author = question['author']
    const formattedAuthor = users[author]['name']
    const avatar = users[author]['avatarURL']
    return (
        <div>
            <Nav /> 
            {userHasAnswered 
                ? <div>{answer !== '' 
                        && this.showResults(
                            answer, questions, id, users)}</div>
                : <div className='question-info'>
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
                    }
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
    }
  }
  
  export default connect(mapStateToProps)(Question)