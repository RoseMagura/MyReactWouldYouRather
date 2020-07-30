import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
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

const NoMatchPage = () => {
    return(
        <h3>404 - Not found</h3>
    )
}    

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
                        {this.props.loading === true 
                            ? <div>Still loading</div>
                            : <div>
                                <Switch>
                                <Route path='/login' exact 
                                    component={Login} />
                                <PrivateRoute component={Homepage} 
                                    authedUser={authedUser}
                                    path="/" exact />
                                <PrivateRoute 
                                    exact path="/question/:id"
                                    component={Question}
                                    authedUser={authedUser}
                                    />                                    
                                <PrivateRoute component={AddQuestion} 
                                    authedUser={authedUser}
                                    path="/add" exact />
                                <PrivateRoute component={Leaderboard} 
                                    authedUser={authedUser}
                                    path="/leaderboard" exact />
                                <Route component={NoMatchPage} />  
                                </Switch>
                            </div>}
                </Router>               
            </div>
          );
    }
}

function mapStateToProps ({ users, authedUser }) {
    return {
        loading: users === null,
        authedUser
    }
}

export default connect(mapStateToProps)(App);
