import { SET_AUTHED_USER } from '../actions/authedUser'

export default function authedUer (state = null, action) {
    switch(action.type) {
        case SET_AUTHED_USER : 
            return action.id
        default : 
            return state    
    }
}