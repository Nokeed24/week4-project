import * as request from 'superagent'
import {getBreedName} from '../lib/functions'

export const FETCHED_RANDOM_BREED = 'FETCHED_RANDOM_BREED'
export const SET_BREED_NAME = 'SET_BREED_NAME'
const baseUrl = 'https://dog.ceo/api/breeds'

export const fetchRandom = () => (dispatch) => {
  request
    .get(`${baseUrl}/image/random`)
    .then(response => dispatch({
      type: FETCHED_RANDOM_BREED,
      payload: response.body.message
    }))
}

export const setBreedName = (url) => {
  const breedName = getBreedName(url)
  console.log(breedName)
  return {
    type: SET_BREED_NAME,
    payload: {
      breedName
    }
  }
}


