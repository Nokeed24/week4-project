
import {FETCHED_RANDOM_BREED} from '../actions/breeds'

export default function (state = "", {type, payload}) {
  switch (type) {
  case FETCHED_RANDOM_BREED:
    return payload
  // case SET_BREED_NAME:
  //   return state

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
