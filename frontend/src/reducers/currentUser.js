import {USER_LOGIN_SUCCESS} from '../actions/users'

export default function (state = null, action) {
  console.log(action.payload, "CURRENTUSER 12")
 	switch (action.type) {
	 	case USER_LOGIN_SUCCESS:

			 return action.payload


 		default: return state
 	}
}
