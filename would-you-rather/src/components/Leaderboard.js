import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

class Leaderboard extends Component {
    displayEntry (info, totalEach) {
        const { users } = this.props
        return(
        <li key={info}>
            <img
                width='100'
                height='100' 
                src={users[info].avatarURL}
                alt={`Avatar of ${users[info].name}`}
                className='avatar'
                /><br/>        
            {info}<br/>
            {Object.keys(users[`${info}`].answers).length} answers <br/>
            {Object.keys(users[`${info}`].questions).length} questions <br/>
            Score: {totalEach[`${info}`]} 
        </li>)
    }
    render(){
        const { usersArray, users } = this.props

        let answersEach = {}
        let questionsEach = {}
        let totalEach = {}
        users['sarahedo'] !== undefined &&
            usersArray.forEach(user => {
                answersEach[user] = Object.keys(users[user]
                    .answers).length
                questionsEach[user] = Object.keys(users[user]
                    .questions).length
                totalEach[user] = answersEach[user] + questionsEach[user]
            })
        let sortedScores = Object.values(totalEach).sort((a, b) => 
            b - a )
        let sortedUsers = []    
        let usedNum = []
        sortedScores.forEach(entry => {
            let used = false
            usedNum.forEach(element => used = entry === element)
            usedNum.push(entry)
            used === false && sortedUsers.push(Object.keys(totalEach).filter
                (key => { 
                    return totalEach[key] === entry
                }          
            ))
        })    
        return(
            <div>
                <Nav />
                <h1>Everyone's Scores</h1>
                <ul className='users-list'>
                    {sortedUsers.map((u) => (
                        u.length === 1 
                        ? this.displayEntry(u, totalEach)
                        : u.map((person) => (
                          this.displayEntry(person, totalEach)
                        ))
                    ))}
                </ul>
            </div>
        )
    }}
function mapStateToProps ({ users }) {
        return {
          users,
          usersArray: Object.keys(users)
        }
      }
export default connect(mapStateToProps)(Leaderboard)