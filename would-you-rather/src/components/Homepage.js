import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUserData, handleQuestionData, 
         handleInitialUser } from '../actions/shared';
import { setAuthedUser } from '../actions/authedUser';         
import Question from './Question'

class Homepage extends Component {
    componentDidMount() {
        this.props.dispatch(handleUserData())
        this.props.dispatch(handleQuestionData())
        //Problem here?
        this.props.dispatch(setAuthedUser(this.props.location.search.slice(1)))
    }
    revealAnswered () {
        console.log('REVEALING')
    }

    render(){

        const items =  this.props.questionsIds
        const users = this.props.users
        const authedUser = this.props.authedUser
        const answered =  users[authedUser] !== undefined && 
            users[authedUser]['answers']     
    return (
            <div>
                <h1>Welcome, {authedUser}!</h1>
               Homepage
               <h3>Unaswered Questions</h3>
                    <ul className='homepage-list'>
                        {this.props.questionsIds.map((id) => (
                            !(id in answered) && 
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
                    </ul>    
               <button onClick={this.revealAnswered}>Show Answered Questions</button>
               <ul style={{display: 'none'}}className='answered-list'>
                        {this.props.questionsIds.map((id) => (
                            id in answered && 
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
                    </ul>    
            </div>
          );
    }
}

function mapStateToProps ({ questions, users, authedUser }) {
    return {
      questionsIds: Object.keys(questions),
      questions,
      users,
      authedUser
    }
  }
  
  //does homepage need to be connected to the store? 
  export default connect(mapStateToProps)(Homepage);
