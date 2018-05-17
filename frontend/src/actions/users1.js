import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS'

export const fetchAllUsers = () => (dispatch) => {
  request
    .get(`${baseUrl}/users`)

    .then(response => {
      console.log('GET IT?!')
      dispatch({
        type: FETCH_ALL_USERS,
        payload: response.body.users
      })})
    .catch(err => alert(err))
}
