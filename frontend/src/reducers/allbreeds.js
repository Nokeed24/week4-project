import {FETCH_ALL_LIKES} from '../actions/users'

export default function (state = [], action) {
  switch (action.type) {
  case FETCH_ALL_LIKES:
    console.log(action, "ALL LIKES")
    return action.payload
  default: return state
  }
}
