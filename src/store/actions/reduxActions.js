export const addMusic = (data) => {
	return(dispatch)=>{
		dispatch({
			type: "ADD_MUSIC",
			data
		})
	}
}

export const deleteMusic = (id) => {
	return(dispatch)=>{
		dispatch({
			type: "DELETE_MUSIC",
			id
		})
	}
}

export const updateMusic = (data) => {
	return(dispatch)=>{
		dispatch({
			type: "UPDATE_MUSIC",
			id: data.id,
			data: data
		})
	}
}