import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUserData, handleQuestionData, 
         getAgain } from '../actions/shared';
import { getAuthedUser } from '../actions/authedUser';    
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
    componentDidMount() {
        // this.props.dispatch(handleUserData())
        // this.props.dispatch(handleQuestionData())
        // Get user from store
        // this.props.dispatch(getAgain)       
    }

    render(){
        console.log('PROPS: ', this.props)
        // const items =  this.props.questionsIds
        // const users = this.props.users
        // const authedUser = this.props.authedUser
        // let answered = []
        // let unanswered = []        
        // users[authedUser] !== undefined && items.forEach(element => 
        //     element in users[authedUser]['answers']
        //         ? answered.push(element) 
        //         : unanswered.push(element)
        //     )                
    return (
        <div>
            Hello
        </div>
            // <div>
            //     <Nav />
            //     <h2 
            //         className={this.state.active === 'uHeading' 
            //             ? 'active' : ''}
            //         onClick={(e)=>{this.toggleHeader(e,'uHeading')}}>
            //         Unanswered Questions</h2>
            //     <h2 
            //         className={this.state.active === 'aHeading' 
            //             ? 'active' : ''}
            //         onClick={(e)=>{this.toggleHeader(e,'aHeading')}}>
            //         Answered Questions</h2>
            //    {this.state.active === 'uHeading'
            //     ? <QuestionList info={[unanswered, 'Unanswered']}/>
            //     : <QuestionList info={[answered, 'Answered']}/>
            //     }
                
            // </div>
          );
    }
}

function mapStateToProps (store) {
    console.log('STORE', store)
    const { authedUser } = store
    return { authedUser }
    // return {
    //   questionsIds: Object.keys(questions),
    //   questions,
    //   users,
    //   authedUser
    // }
  }
  
export default connect(mapStateToProps)(Homepage);
