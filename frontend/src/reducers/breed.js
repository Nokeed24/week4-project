
//This would be breeds instead of products

import {FETCHED_ALL_BREEDS, FETCHED_RANDOM_BREED, FETCHED_DETAILED_BREED,SET_BREED_NAME} from '../actions/breeds'


export default function (state = "", {type, payload}) {
  switch (type) {
  case FETCHED_RANDOM_BREED:
    return payload
  case SET_BREED_NAME:
    return payload  
   // case UPDATE_PRODUCT:
	 //   if (action.payload.id === state.id) {
	 //     return action.payload
	 //   }
	 //   else return state

  default:
    return state
  }
}
