
//This would be breeds instead of products
import {getBreedName} from '../lib/functions'
import {FETCHED_RANDOM_BREED} from '../actions/breeds'

export default function (state = "", action) {
  switch (action.type) {
    case FETCHED_RANDOM_BREED:
      const breedName = getBreedName(action.payload)
      return breedName
   // case UPDATE_PRODUCT:
	 //   if (action.payload.id === state.id) {
	 //     return action.payload
	 //   }
	 //   else return state

  default:
    return state
  }
}
