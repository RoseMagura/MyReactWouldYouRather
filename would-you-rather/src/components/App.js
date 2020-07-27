import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Homepage from './Homepage';
import AddQuestion from './AddQuestion';
import Question from './Question';
import Leaderboard from './Leaderboard';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { handleUserData, handleQuestionData, 
    handleInitialUser } from '../actions/shared';

class App extends Component {
    componentDidMount () {
        this.props.dispatch(handleUserData())
        this.props.dispatch(handleQuestionData())
        this.props.dispatch(handleInitialUser())
    }
    render(){
        const authedUser = this.props.authedUser
        return (
            <div>
                <Router>
                        {<div>
                            <Route path='/login' exact component={Login} />
                            <PrivateRoute component={Homepage} 
                                authedUser={authedUser}
                                path="/" exact />
                            <PrivateRoute component={AddQuestion} 
                                authedUser={authedUser}
                                path="/add" exact />
                            <PrivateRoute component={Leaderboard} 
                                authedUser={authedUser}
                                path="/leaderboard" exact />

                            {/* <Route path='/add' exact component={AddQuestion} />
                            <Route path='/leaderboard' exact component={Leaderboard} /> */}
                        </div>}
                    {/* {this.props.loading === true 
                        ? <div>Still loading</div>
                        : <div>
                            <Route path='/' exact component={Login} />
                            <Route path='/success' component={Homepage} />
                            <Route path='/new' component={AddQuestion} />
                        </div>} */}
                </Router>               
            </div>
          );
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        loading: authedUser === null,
        authedUser
    }
}

export default connect(mapStateToProps)(App);
