const initState = {
	employeeError: ''
}

const sihrEmployeeReducer = (state = initState, action) => {
	switch(action.type){
		case "INPUT_EMPLOYEE_SUCCESS":
			console.log('INPUT_EMPLOYEE_SUCCESS')
			return{
				...state,
				employeeError: ''
			}


		case "INPUT_EMPLOYEE_ERROR":
			console.log('INPUT_EMPLOYEE_ERROR')
			return{
				...state,
				employeeError: 'INPUT_EMPLOYEE_ERROR'
			}

		case "DELETE_SUCCESS":
			console.log('DELETE_SUCCESS')
			return{
				...state,
				employeeError: ''
			}

		case "UPDATE_EMPLOYEE_SUCCESS":
			console.log('UPDATE_EMPLOYEE_SUCCESS')
			return{
				...state,
				employeeError: ''
			}

		case "UPDATE_EMPLOYEE_ERROR":
			console.log('UPDATE_EMPLOYEE_ERROR')
			return{
				...state,
				employeeError: 'UPDATE_EMPLOYEE_ERROR'
			}

		default:
			return state
	}
}

export default sihrEmployeeReducer