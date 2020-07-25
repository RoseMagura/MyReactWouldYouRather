import { _getUsers } from '../utils/_DATA.js'
import { _getQuestions, formatQuestion, _saveQuestion } from '../utils/_DATA.js'
import { setAuthedUser, getAuthedUser } from './authedUser'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'


export function handleUserData () {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}

export function handleQuestionData () {
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleInitialUser () {
    return (dispatch) => {
        dispatch(setAuthedUser(null))
    }
}

export function setLoggedInUser (value) {
    return (dispatch) => {
        dispatch(setAuthedUser(value))
    }
}