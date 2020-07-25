import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

class Leaderboard extends Component {

    render(){
        return(
            <div>
                <Nav />
                LEADERBOARD
            </div>
        )
    }}
function mapStateToProps ({ authedUser }) {
        return {
          authedUser
        }
      }
export default connect(mapStateToProps)(Leaderboard)