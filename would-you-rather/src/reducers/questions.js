import { RECEIVE_QUESTIONS, ADD_QUESTION, 
         SAVE_ANSWER_TO_QUESTION
        } from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS : 
            return {
                ...state, 
                ...action.questions
            }
        case ADD_QUESTION : 
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                }
            }    
        case SAVE_ANSWER_TO_QUESTION :   
            console.log(action.questions[action.qid][action.answer]['votes'])
            return {
                ...state,
                [action.qid] : {
                    ...state[action.qid],
                    [action.answer]: {'votes': 
                    action.questions[action.qid][action.answer]['votes']
                            .concat([action.authedUser]),
                         text: action.questions
                         [action.qid][action.answer]['text']}
                }} 
        default : 
            return state
    }
}