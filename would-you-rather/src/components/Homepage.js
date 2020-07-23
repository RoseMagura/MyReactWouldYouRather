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
    render(){

        const items =  this.props.questionsIds
        console.log(typeof items)
    return (
            <div>
               Homepage
               <h3>All Questions</h3>
                    <ul className='homepage-list'>
                        {this.props.questionsIds.map((id) => (
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
