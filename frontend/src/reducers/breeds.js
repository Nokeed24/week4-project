
//this would also be for breeds

import {FETCHED_ALL_BREEDS} from '../actions/breeds'

export default function (state = [], action) {
  switch (action.type) {
  case FETCHED_ALL_BREEDS:
    return action.payload

    // case ADD_PRODUCT:
  	//   return [...state, action.payload]
    //
  	// case REMOVE_PRODUCT:
  	//   return state.filter(product => product.id !== action.payload)
    //
    // case UPDATE_PRODUCT:
    //   return state.map(product => {
    //     if (product.id === action.payload.id) {
    //       return action.payload
    //     }
    //     else return product
    //   })

  default:
    return state
  }
}
