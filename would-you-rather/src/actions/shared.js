import { _getUsers } from '../utils/_DATA.js'
import { _getQuestions } from '../utils/_DATA.js'
import { setAuthedUser } from './authedUser'
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
        dispatch(setAuthedUser('initial value'))
    }
}