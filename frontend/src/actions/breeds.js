import * as request from 'superagent'

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


