import * as request from 'superagent'

export const FETCHED_DETAILED_BREED = 'FETCHED_DETAILED_BREED'
export const FETCHED_ALL_BREEDS = 'FETCHED_ALL_BREEDS'
export const FETCHED_RANDOM_BREED = 'FETCHED_RANDOM_BREED'
const baseUrl = 'https://dog.ceo/api/breeds'
export const fetchRandom = () => (dispatch) => {
  request
    .get(`${baseUrl}/image/random`)
    .then(response => dispatch({
      type: FETCHED_RANDOM_BREED,
      payload: response.body.message
    }))
}

export const oneBreed = (action) => {
  return {
    type: FETCHED_DETAILED_BREED,
    payload: action
  }
}

export const allBreeds = (action) => {
  return {
    type: FETCHED_ALL_BREEDS,
    payload: action
  }
}
