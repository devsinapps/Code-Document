//Handle Input New Employee to Firebase
export const addEmployee = (newEmployee) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		//Add Collection which will be used
		firestore.collection('employees').add({
			...newEmployee,
			firstName: newEmployee.firstName,
			lastName: newEmployee.lastName,
			age: newEmployee.age,
			gender: newEmployee.gender,
			education: newEmployee.education,
			country: newEmployee.country,
			city: newEmployee.city,
			address: newEmployee.address,
			createdAt: new Date()
		}).then(()=>{
			dispatch({
				type: "ADD_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "ADD_ERROR",
				err
			})
		})
	}
}

//Handle Delete Data Employee
	//Take Argument from main component (employeeId)
	//this argument contain Id from main component / state
export const deleteEmployee = (employeeId) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		//filter the data of Collections, so just data with the same id. to Delete it
		firestore.collection('employees').doc(employeeId).delete().then(()=>{
			dispatch({
				type: "DELETE_SUCCESS"
			})
		})
	}
}



//Handle Update Data Employee
	//Take Argument from main component (employee)
	//this argument contain value from state, so can use
export const updateEmployee = (employee) => {
	return(dispatch, getState, {getFirestore}) => {
		const firestore = getFirestore()

		//Filter the data of collections, according to id. so Just data with The same Id
		firestore.collection('employees').doc(employee.employeeId).set({
			//Fill the varaible with variable from state
			firstName: employee.firstName,
			lastName: employee.lastName,
			age: employee.age,
			gender: employee.gender,
			education: employee.education,
			country: employee.country,
			city: employee.city,
			address: employee.address,
			createdAt: employee.createdAt
		}).then(()=>{
			dispatch({
				type: "UPDATE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_ERROR",
				err
			})
		})
	}
}