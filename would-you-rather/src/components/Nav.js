import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    render(){
        return(
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active' >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active' >
                            Add New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active' >
                            Leader Board
                        </NavLink>
                    </li>
                    {this.props.authedUser !== null ? 
                    <div>
                        <li>
                            Welcome, {this.props.authedUser}!
                        </li> 
                        <li>
                        <NavLink to='/login' exact activeClassName='active' >
                            Logout
                        </NavLink>
                        </li>
                    </div>
                    : null}

                </ul>
            </nav>
        )
    }}
function mapStateToProps ({ authedUser }) {
        return {
          authedUser
        }
      }
export default connect(mapStateToProps)(Nav)