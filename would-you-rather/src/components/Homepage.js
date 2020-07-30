import React, { Component } from 'react';
import { connect } from 'react-redux';  
import QuestionList from './QuestionList';     
import Nav from './Nav';

class Homepage extends Component {
    state = {
       active: 'uHeading' //default
    }
    toggleHeader (e, type) {
        e.preventDefault()
        this.setState({active: type})
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
                <Nav />
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

function mapStateToProps ({questions, users, authedUser}) {
    return {
      users,
      authedUser,
      questionsIds: Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
  }
  
export default connect(mapStateToProps)(Homepage);
