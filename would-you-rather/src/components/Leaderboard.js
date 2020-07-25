import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

class Leaderboard extends Component {
    render(){
        // console.log(this.props)
        const { usersArray, authedUser, users } = this.props
        // console.log('USERS: ', usersArray)

        let answersEach = {}
        users['sarahedo'] !== undefined &&
            usersArray.forEach(user => {
                answersEach[user] = Object.keys(users[user].answers).length
            })

        let questionsEach = {}
        users['sarahedo'] !== undefined &&
            usersArray.forEach(user => {
                questionsEach[user] = Object.keys(users[user].questions).length
                })    
        
        usersArray.forEach(element => console.log(element, 
            answersEach[element], questionsEach[element]))        
        // console.log('Authed User: ', authedUser)
        return(
            <div>
                <Nav />
                <ul className='users-list'>
                    {usersArray.map((u) => (
                        <li key={u}>
                            {u}
                            {Object.keys(users[`${u}`].answers).length} answers
                            {Object.keys(users[`${u}`].questions).length} questions 
                        </li>
                    ))}
                </ul>
            </div>
        )
    }}
function mapStateToProps ({ authedUser, users }) {
        return {
          authedUser, 
          users,
          //want userid, number of answers, number of questions
          usersArray: Object.keys(users)
            // .sort((a, b) => users[a].answers.length - users[b].answers.length)
        }
      }
export default connect(mapStateToProps)(Leaderboard)