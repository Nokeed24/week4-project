import {FETCH_LIKES_BY_ID, UPDATE_USER_LIKES} from '../actions/users'

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_LIKES_BY_ID:
            return action.payload

        case UPDATE_USER_LIKES:
            return action.payload
        default: return state
       }
  }
