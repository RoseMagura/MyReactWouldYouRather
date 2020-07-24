import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUserData, handleQuestionData, 
         handleInitialUser } from '../actions/shared';
import { setAuthedUser } from '../actions/authedUser';    
import QuestionList from './QuestionList';     

class Homepage extends Component {
    state = {
       active: 'uHeading' //default
    }
    toggleHeader (e, type) {
        e.preventDefault()
        this.setState({active: type})
    }
    componentDidMount() {
        this.props.dispatch(handleUserData())
        this.props.dispatch(handleQuestionData())
        //Problem here?
        this.props.dispatch(setAuthedUser(this.props.location.search.slice(1)))
    }

    render(){

        const items =  this.props.questionsIds
        const users = this.props.users
        const authedUser = this.props.authedUser
        let answered = []
        let unanswered = []        
        users[authedUser] !== undefined && items.forEach(element => 
            element in users[authedUser]['answers']
                ? answered.push(element) 
                : unanswered.push(element)
            )                
    return (
            <div>
                <h1>Welcome, {authedUser}!</h1>
                <h2 
                    className={this.state.active === 'uHeading' 
                        ? 'active' : ''}
                    onClick={(e)=>{this.toggleHeader(e,'uHeading')}}>
                    Unanswered Questions</h2>
                <h2 
                    className={this.state.active === 'aHeading' 
                        ? 'active' : ''}
                    onClick={(e)=>{this.toggleHeader(e,'aHeading')}}>
                    Answered Questions</h2>
               {this.state.active === 'uHeading'
                ? <QuestionList info={[unanswered, 'Unanswered']}/>
                : <QuestionList info={[answered, 'Answered']}/>
                }
                
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
  
export default connect(mapStateToProps)(Homepage);
