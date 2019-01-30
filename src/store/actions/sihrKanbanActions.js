export const inputKanban = (newJob) => {
	return(dispatch, getState,{getFirestore})=>{
		const firestore = getFirestore();
		const authorId = getState().firebase.auth.uid
		const authorName = getState().firebase.profile
		firestore.collection('kanban').add({
			...newJob,
			authorId: authorId,
			authorName: authorName.firstName + '' + authorName.lastName,
			jobTitle: newJob.jobTitle,
			jobDesk: newJob.jobDesk,
			description: newJob.description,
			deadLine: newJob.deadLine,
			doneDate: newJob.doneDate,
			createdAt: new Date()
		}).then(()=>{
			dispatch({
				type: "INPUT_JOB_KANBAN_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "INPUT_JOB_KANBAN_ERROR",
				err
			})
		})
	}
}

export const deleteKanban = (kanbanId) => {
	return(dispatch, getState,{getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('kanban').doc(kanbanId).delete().then(()=>{
			dispatch({
				type: "DELETE_KANBAN"
			})
		})
	}
}

export const updateKanban = (kanban) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore()

		firestore.collection('kanban').doc(kanban.kanbanId).set({
			authorId: kanban.authorId,
			authorName: kanban.authorName,
			createdAt: kanban.createdAt,
			deadLine: kanban.deadLine,
			jobTitle: kanban.jobTitle,
			jobDesk: kanban.jobDesk,
			description: kanban.description,
			doneDate: kanban.doneDate,
		}).then(()=>{
			dispatch({
				type: "UPDATE_KANBAN_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_KANBAN_ERROR",
				err
			})
		})
	}
}