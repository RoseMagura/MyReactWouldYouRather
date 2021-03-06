import { RECEIVE_USERS, SAVE_ANSWER_TO_USER,
          ADD_QUESTION_TO_USER } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS : 
            return {
                ...state, 
                ...action.users
            }  
        case ADD_QUESTION_TO_USER :
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    'questions': {
                        ...state[action.authedUser]['questions']
                            .concat([action.qid])
                    }
                }
            }    
        case SAVE_ANSWER_TO_USER :
            const person = action.users[action.authedUser]
            let answers = {}
            if(person.answers !== null) {
                answers = {
                    ...person['answers'],
                    [action.qid]: action.answer
                }
            }
            return {
                ...state,
                [action.authedUser]: {
                        ...state[action.authedUser],
                        'answers':{
                        ...answers }                 
                    }
            }
        default : 
            return state
    }
}