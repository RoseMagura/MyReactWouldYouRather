import { _getUsers } from '../utils/_DATA.js'
import { _getQuestions } from '../utils/_DATA.js'
import { setAuthedUser } from './authedUser'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

// Todo: replace with value from logging in
const AUTHED_ID = 'sarah' 

export function handleUserData () {
    return (dispatch) => {
        return _getUsers()
            .then(({ users }) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}

export function handleQuestionData () {
    return (dispatch) => {
        return _getQuestions()
            .then(({ questions }) => {
                dispatch(receiveQuestions(questions))
            })
    }
}