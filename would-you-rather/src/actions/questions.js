export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function saveAnswerToQuestion ({authedUser, questions, 
        qid, answer}) {
    return {
        type: SAVE_ANSWER_TO_QUESTION,
        authedUser,
        questions,
        qid,
        answer
    }
}