
//This would be breeds instead of products

import {FETCHED_ALL_BREEDS, FETCHED_RANDOM_BREED, FETCHED_DETAILED_BREED} from '../actions/breeds'


export default function (state = null, action) {
  switch (action.type) {
  case FETCHED_DETAILED_BREED:
    return action.payload
  case FETCHED_RANDOM_BREED:
    return action.payload
  // case UPDATE_PRODUCT:
	 //   if (action.payload.id === state.id) {
	 //     return action.payload
	 //   }
	 //   else return state

  default:
    return state
  }
}
