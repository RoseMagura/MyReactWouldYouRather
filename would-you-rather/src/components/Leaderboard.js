import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

class Leaderboard extends Component {
    render(){
        const { usersArray, users } = this.props

        let answersEach = {}
        let questionsEach = {}
        let totalEach = {}
        users['sarahedo'] !== undefined &&
            usersArray.forEach(user => {
                answersEach[user] = Object.keys(users[user].answers).length
                questionsEach[user] = Object.keys(users[user].questions).length
                totalEach[user] = answersEach[user] + questionsEach[user]
            })
        let sortedScores = Object.values(totalEach).sort((a, b) => 
            b - a )
        let sortedUsers = []    
        sortedScores.forEach(entry => {
            sortedUsers.push(Object.keys(totalEach).find
                (key => totalEach[key] === entry))
        })     
        return(
            <div>
                <Nav />
                <h1>Everyone's Scores</h1>
                <ul className='users-list'>
                    {sortedUsers.map((u) => (
                        <li key={u}>
                            <img
                                width='100'
                                height='100' 
                                src={users[u].avatarURL}
                                alt={`Avatar of ${users[u].name}`}
                                className='avatar'
                                /><br/>        
                            {u}<br/>
                            {Object.keys(users[`${u}`].answers).length} answers <br/>
                            {Object.keys(users[`${u}`].questions).length} questions <br/>
                            Score: {totalEach[`${u}`]} 
                        </li>
                    ))}
                </ul>
            </div>
        )
    }}
function mapStateToProps ({ authedUser, users }) {
        return {
          users,
          usersArray: Object.keys(users)
        }
      }
export default connect(mapStateToProps)(Leaderboard)