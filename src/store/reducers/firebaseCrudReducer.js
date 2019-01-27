const initState = {
	addError: ''
}

const firebaseCrudReducer = (state = initState, action) => {
	switch(action.type){
		case "ADD_SUCCESS":
			console.log("ADD_SUCCESS")
			return{
				...state,
				addError: ''
			}
		case "ADD_ERROR":
			console.log("ADD_ERROR")
			return{
				...state,
				addError: 'ADD_ERROR'
			}
		case "DELETE_SUCCESS":
			console.log("DELETE_SUCCESS")
			return{
				...state,
				addError: ''
			}
		case "UPDATE_SUCCESS":
			console.log("UPDATE_SUCCESS")
			return{
				...state,
				addError: ''
			}
		case "UPDATE_ERROR":
			console.log("UPDATE_ERROR")
			return{
				...state,
				addError: 'UPDATE_ERROR'
			}
		default: 
			return null
	}
}

export default firebaseCrudReducer