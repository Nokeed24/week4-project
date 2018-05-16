import {FETCH_LIKES_BY_ID, ADD_LIKE} from '../actions/users'

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_LIKES_BY_ID:
            return action.payload
        case ADD_LIKE:
            return action.payload
  
  
        default: return state
       }
  }