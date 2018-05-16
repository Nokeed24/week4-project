
//This would be breeds instead of products
import {getBreedName} from '../lib/functions'
import {FETCHED_ALL_BREEDS, FETCHED_RANDOM_BREED, FETCHED_DETAILED_BREED,SET_BREED_NAME} from '../actions/breeds'
import {setBreedName} from '../actions/breeds'

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
