
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const loginSucces = (action) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: action
  }
}

export const loginFailed = (action) => {
  return {
    type: USER_LOGIN_FAILED,
    payload: action
  }
}

export const signupSucces = (action) => {
  return {
    type: USER_SIGNUP_SUCCESS,
    payload: action
  }
}

export const signupFailed = (action) => {
  return {
    type: USER_SIGNUP_FAILED,
    payload: action
  }
}
