export const inputAttendance = (newData) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('attendance').add({
			...newData,
			location: newData.location
		}).then(()=>{
			dispatch({
				type: "INPUT_ATTENDACE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "INPUT_ATTENDACE_ERROR",
				err
			})
		})
	}
}