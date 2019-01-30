const initState = {
	kanbanError: ''
}

const sihrKanbanReducer = (state = initState, action) => {
	switch(action.type){
		case "INPUT_JOB_KANBAN_SUCCESS":
			console.log("INPUT_JOB_KANBAN_SUCCESS")
			return{
				...state,
				kanbanError: ''
			}

		case "INPUT_JOB_KANBAN_ERROR":
			console.log("INPUT_JOB_KANBAN_ERROR")
			return{
				...state,
				kanbanError: 'INPUT_JOB_KANBAN_ERROR'
			}

		case "DELETE_KANBAN":
			console.log("DELETE_KANBAN")
			return{
				...state,
				kanbanError: ''
			}

		case "UPDATE_KANBAN_SUCCESS":
			console.log("UPDATE_KANBAN_SUCCESS")
			return{
				...state,
				kanbanError: ''
			}

		case "UPDATE_KANBAN_ERROR":
			console.log("UPDATE_KANBAN_ERROR")
			return{
				...state,
				kanbanError: 'UPDATE_KANBAN_ERROR'
			}
			
		default:
			return state
	}
}

export default sihrKanbanReducer