import {FETCH_ALL_USERS} from '../actions/users1'

export default function (state = [], action) {
  switch (action.type) {
  case FETCH_ALL_USERS:
    console.log(action, "ALL USERS")
    return action.payload
  default: return state
  }
}
