import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Nav.css';

class Nav extends Component {

    render(){
        const { authedUser, users } = this.props
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
                        <NavLink to='/leaderboard' exact 
                            activeClassName='active' >
                            Leader Board
                        </NavLink>
                    </li>
                    {authedUser !== null ? 
                    <div>
                        <li>
                            Welcome, {authedUser}! <br/>
                            <img 
                                width='100'
                                height='100' 
                                src={users[authedUser]['avatarURL']}
                                alt={`Avatar of ${authedUser}`}
                                className='avatar'
                                />
                        </li> 
                        <li>
                        <NavLink to='/login' exact 
                            activeClassName='active' >
                            Logout
                        </NavLink>
                        </li>
                    </div>
                    : null}
                </ul>
            </nav>
        )
    }}
function mapStateToProps ({ authedUser, users }) {
        return {
          authedUser,
          users
        }
      }
export default connect(mapStateToProps)(Nav)