import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'
export const FETCH_LIKES_BY_ID = 'FETCH_LIKES_BY_ID'
export const ADD_LIKE = 'ADD_LIKE'
export const UPDATE_USER_LIKES = 'UPDATE_USER_LIKES'
export const FETCH_ALL_LIKES = 'FETCH_ALL_LIKES'

export const login = (email, password) => (dispatch) => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.log(err)
      }
    })
}

export const signup = (email, password) => (dispatch) => {
  // console.log(email, 'EMAIL')
  	request
  		.post(`${baseUrl}/users`)
  		.send({ email, password })
  		.then(result => {
      // console.log('SENT')
  			dispatch({
  				type: USER_SIGNUP_SUCCESS
  			})
  		})
  		.catch(err => {
  			if (err.status === 400) {
  				dispatch({
  					type: USER_SIGNUP_FAILED,
  					payload: err.response.body.message || 'Unknown error'
  				})
  			}
  			else {
  				console.error(err)
  			}
  		})
}

export const fetchLikesForId = (id) => dispatch => {
  request
    .get(`${baseUrl}/likes/${id}`)
    .then(response => dispatch({
      type: FETCH_LIKES_BY_ID,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const postLike = (like) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/likes/`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(like)
    .then(response => dispatch({
      type: ADD_LIKE,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const updateLike = (updates) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  const userId = state.currentUser.id
  request
    .put(`${baseUrl}/users/${userId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(updates)
    .then(response => dispatch({
      type: UPDATE_USER_LIKES,
      payload: response.body
    }))
}

export const fetchAllLikes = () => (dispatch) => {
  request
    .get(`${baseUrl}/likes`)
    .then(response => {
      dispatch({
      type: FETCH_ALL_LIKES,
      payload: response.body.likes
    })})
    .catch(err => alert(err))
}
