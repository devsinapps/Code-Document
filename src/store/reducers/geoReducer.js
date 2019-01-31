const initState = {
	inputError: ""
}

const geoReducer = ( state = initState, action ) => {
	switch(action.type){
		case "INPUT_ATTENDACE_SUCCESS":
			console.log('INPUT_ATTENDACE_SUCCESS')
			return{
				...state,
				inputError: ''
			}

		case "INPUT_ATTENDACE_ERROR":
			console.log('INPUT_ATTENDACE_ERROR')
			return{
				...state,
				inputError: 'INPUT_ATTENDACE_ERROR'
			}

		default:
			return state
	}
}