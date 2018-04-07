import {toogleButton} from '../actions'


const INITIAL_STATE = {
	toggle: false
}

export const toggle = (state=INITIAL_STATE, action) => {
	console.log(action, 'reducerAction')
	switch (action.type) {
		case "TOOGLE_BUTTON":
			state = action.payload
			return state
		default:
		return state;
	}
}

