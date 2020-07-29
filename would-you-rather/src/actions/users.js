export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
} 

export function saveAnswerToUser ({authedUser, users, qid, answer}) {
    return {
        type: SAVE_ANSWER_TO_USER,
        authedUser,
        users,
        qid,
        answer
    }
}

export function addQuestionToUser ({authedUser, users, qid}) {
    return {
        type: ADD_QUESTION_TO_USER,
        authedUser,
        users,
        qid,
    }
}