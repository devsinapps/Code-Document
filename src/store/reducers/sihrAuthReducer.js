const initState = {
	authError: ''
}

const sihrAuthReducer = (state = initState, action) => {
	switch(action.type){
		case "SIGNIN_SUCCESS":
			console.log('SIGNIN_SUCCESS')
			return{
				...state,
				authError: ''
			}

		case "SIGNIN_ERROR":
			console.log('SIGNIN_ERROR')
			return{
				...state,
				authError: 'SIGNIN_ERROR'
			}

		case "SIGNOUT_SUCCESS":
			console.log('SIGNOUT_SUCCESS')
			return{
				...state,
				authError: ''
			}

		case "SIGNUP_SUCCESS":
			console.log('SIGNUP_SUCCESS')
			return{
				...state,
				authError: ''
			}

		case "SIGNUP_ERROR":
			console.log('SIGNUP_ERROR')
			return{
				...state,
				authError: 'SIGNUP_ERROR'
			}
			
		default:
			return state
	}
}

export default sihrAuthReducer