import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Homepage from './Homepage';
import AddQuestion from './AddQuestion';
import Question from './Question';
import Leaderboard from './Leaderboard';
import { connect } from 'react-redux';
import { handleUserData, handleQuestionData, 
    setLoggedInUser, handleInitialUser } from '../actions/shared';

class App extends Component {
    componentDidMount () {
        // console.log('IM RUNNING')
        this.props.dispatch(handleUserData())
        this.props.dispatch(handleQuestionData())
        this.props.dispatch(handleInitialUser())
        //testing to see if this value persists
        // this.props.dispatch(setLoggedInUser('bob'))
    }
    render(){
        return (
            <div>
                <Router>
                        {<div>
                            <Route path='/' exact component={Login} />
                            <Route path='/success' component={Homepage}/>
                            <Route path='/new' component={AddQuestion} />
                            <Route path='/leaderboard' component={Leaderboard} />
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
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);
