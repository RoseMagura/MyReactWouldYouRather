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
  showResults = (answer, questions, qid) => {
    const chosen = questions[qid][answer]
    const other = answer === 'optionOne'
      ? questions[qid]['optionTwo']
      : questions[qid]['optionOne']
    const total = chosen['votes'] !== undefined &&
        other['votes'] !== undefined &&
        chosen['votes'].length + other['votes'].length
    return(<Votes chosen={chosen} other={other} total={total} />)
}       
  handleSubmit = (e) => {
      e.preventDefault()
      const qid = this.props.location.pathname.split('/').pop()
      const { dispatch, authedUser, users, questions } = this.props
      const answer = this.state.choice
      dispatch(handleSaveAnswer(authedUser, qid, answer, 
                                users, questions))
                        .then(console.log(questions[qid][answer]))                          
                                // .then(this.setState({submitted: true}))
                                // .then(console.log(
                                //     this.showResults(answer, questions, qid)))                                                
  }
  render() {
    const { questions, users } = this.props
    const id = this.props.location.pathname.split('/').pop()
    const answer = this.state.choice

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
                    {/* <div>
                        {this.state.submitted && 
                            console.log(this.state.submitted) &&
                            this.showResults(answer, questions, id)}
                    </div> */}
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