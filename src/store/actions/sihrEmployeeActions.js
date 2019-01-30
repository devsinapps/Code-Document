export const inputEmployee = (newEmployee) => {
	return(dispatch, getState,{getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').add({
			...newEmployee,
			firstName: newEmployee.firstName,
			lastName: newEmployee.lastName,
			address: newEmployee.address,
			country: newEmployee.country,
			city: newEmployee.city,
			age: newEmployee.age,
			gender: newEmployee.gender,
			education: newEmployee.education,
			createdAt: new Date()
		}).then(()=>{
			dispatch({
				type: "INPUT_EMPLOYEE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "INPUT_EMPLOYEE_ERROR",
				err
			})
		})
	}
}

export const deleteEmployee = (employeeId) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').doc(employeeId).delete().then(()=>{
			dispatch({
				type: "DELETE_SUCCESS"
			})
		})
	}
}

export const updateEmployee = (employee) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').doc(employee.employeeId).set({
			firstName: employee.firstName,
			lastName: employee.lastName,
			address: employee.address,
			country: employee.country,
			city: employee.city,
			age: employee.age,
			gender: employee.gender,
			education: employee.education,
			createdAt: employee.createdAt
		}).then(()=>{
			dispatch({
				type: "UPDATE_EMPLOYEE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_EMPLOYEE_ERROR",
				err
			})
		})
	}
}