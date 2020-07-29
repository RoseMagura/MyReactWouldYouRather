import { _getUsers } from '../utils/_DATA.js'
import { _getQuestions, formatQuestion, _saveQuestion, 
        _saveQuestionAnswer } from '../utils/_DATA.js'
import { setAuthedUser } from './authedUser'
import { receiveQuestions, addQuestion, saveAnswerToQuestion,
         } from './questions'
import { receiveUsers, saveAnswerToUser } from './users'


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

export function handleAddQuestion (question) {
    return (dispatch) => {
        return _saveQuestion(question) 
            .then(() => {
                dispatch(addQuestion(question))
            })
    }
}

export function handleSaveAnswer (authedUser,qid, answer, users, 
    questions) {
    return (dispatch) => {
        const info = {authedUser, qid, answer}
        // console.log(info, 'sending to back end')
        return _saveQuestionAnswer(info)
            .then(() => {
                console.log('saving...')
                dispatch(saveAnswerToUser({authedUser, users, 
                    qid, answer}))
                dispatch(saveAnswerToQuestion({authedUser, questions,
                    qid, answer}))
            })
    }
}
