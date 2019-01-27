import React from 'react'
	//Actions
	import { addEmployee } from './../../../../store/actions/firebaseActions'
	import { deleteEmployee } from './../../../../store/actions/firebaseActions'
	import { updateEmployee } from './../../../../store/actions/firebaseActions'
	//Component
	import FirebaseTable from './FirebaseTable'
	import FirebaseForm from './FirebaseForm'

	//Tools
	import { connect } from 'react-redux'
	import { compose } from 'redux'
	import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'

class FirebaseCrud extends React.Component{
	state = {
		employeeId: '',
		firstName: '',
		lastName: '',
		age: '',
		gender: '',
		address: '',
		education: '',
		country: '',
		city: '',
		createdAt: ''
	}

	//Get Data per Row when Click table
	getDataRow = (employee) => {
		this.setState({
			employeeId: employee.id,
			firstName: employee.firstName,
			lastName: employee.lastName,
			age: employee.age,
			gender: employee.gender,
			address: employee.address,
			education: employee.education,
			country: employee.country,
			city: employee.city,
			createdAt: employee.createdAt
		})
	}

	//Handle Input Form
	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	//Handle Delete Employee
	deleteEmployee = (employeeId) => {
		const check = window.confirm('Delete Data ?')
		if(check === true){
			this.props.deleteEmployee(employeeId)
		}else{
			return null
		}	
	}

	//Handle Update Employee
		//make Variable, the value from the state. so can use in Actions.
		//And Send as arguments
	updateEmployee = () => {
		const check = window.confirm('Update Data ?')
		const { employeeId, firstName, lastName, age, gender, address, education, country, city, createdAt } = this.state
		const employee = { employeeId, firstName, lastName, age, gender, address, education, country, city, createdAt }
		if(check === true){
			this.props.updateEmployee(employee)
		}else{
			return null
		}
	}

	//Handle Add New Employee
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addEmployee(this.state)
	}
	render(){
		console.log(this.state)
		const { employees, countries } = this.props
		const { employeeId, firstName, lastName, age, gender, address, education, country, city } = this.state
		const value = { employeeId, firstName, lastName, age, gender, address, education, country, city }
		return(
			<div className='FirebaseCrud'>
				<Container fluid>
					<Breadcrumb>
				        <BreadcrumbItem active> Firebase Crud </BreadcrumbItem>
				    </Breadcrumb>
					<Row>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardBody>
									<FirebaseTable 
										employees={employees}
										getDataRow={this.getDataRow}
									/>
								</CardBody>
							</Card>
						</Col>
						<Col lg='8' className='mx-auto'>
							<Card className='mb-3'>
								<CardBody>
									<FirebaseForm 
										value={value}
										countries={countries}
										onChange={this.onChange}
										onSubmit={this.onSubmit}
										deleteEmployee={this.deleteEmployee}
										updateEmployee={this.updateEmployee}
									/>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		employees: state.firestore.ordered.employees,
		countries: state.countries.countries
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addEmployee: (newEmployee) => dispatch(addEmployee(newEmployee)),
		deleteEmployee: (employeeId) =>  dispatch(deleteEmployee(employeeId)),
		updateEmployee: (employee) =>  dispatch(updateEmployee(employee)),
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{
		collection: 'employees', orderBy: ['createdAt', 'desc']
	}])
	)(FirebaseCrud)


/*
Note Actions 
	1. Use firebaseActions in folder store/actions
	2. Use firebaseCrudReducer in folder store/reducers
*/