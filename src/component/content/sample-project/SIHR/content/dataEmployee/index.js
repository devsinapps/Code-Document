import React from 'react'
//Actions
import { inputEmployee } from './../../../../../../store/actions/sihrEmployeeActions'
import { deleteEmployee } from './../../../../../../store/actions/sihrEmployeeActions'
import { updateEmployee } from './../../../../../../store/actions/sihrEmployeeActions'
//Component
import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm'
//Tools
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class DataEmployee extends React.Component{
	state = {
		employeeId: '',
		firstName: '',
		lastName: '',
		address: '',
		country: '',
		city: '',
		age: '',
		gender: '',
		education: '',
		createdAt: '',
		getCity: []
	}

	getDataRow = (employee) => {
		this.setState({
			employeeId: employee.id,
			firstName: employee.firstName,
			lastName: employee.lastName,
			address: employee.address,
			country: employee.country,
			city: employee.city,
			age: employee.age,
			gender: employee.gender,
			education: employee.education,
			createdAt: employee.createdAt
		})
	}

	getCityFromCountry = (country) => {
		this.setState({
			getCity: country.states
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	addEmployee = (e) => {
		e.preventDefault()
		this.props.inputEmployee(this.state)
	}

	deleteEmployee = (employeeId) => {
		const check = window.confirm('Delete Employee?')
		if(check === true){
			this.props.deleteEmployee(employeeId)
		}else{
			return null
		}
	}

	updateEmployee = (e) => {
		e.preventDefault()
		const { employeeId, firstName, lastName, address, country, city, age, gender, education, createdAt } = this.state
		const employee = { employeeId, firstName, lastName, address, country, city, age, gender, education, createdAt }
		const check = window.confirm('Update Employee?')
		if(check === true){
			this.props.updateEmployee(employee)
		}else{
			return null
		}
	}
	render(){
		console.log(this.state)
		const { employees, countries } = this.props
		const { getCity } = this.state
		const { employeeId, firstName, lastName, address, country, city, age, gender, education } = this.state
		const value = { employeeId, firstName, lastName, address, country, city, age, gender, education }
		return(
			<div className='DataEmployeeSIHR'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Card>
								<CardBody>
									<EmployeeTable
										employees={employees} 
										getDataRow={this.getDataRow}
									/>
								</CardBody>
							</Card>
						</Col>
						<Col lg='10' className='mx-auto'>
							<Card>
								<CardBody>
									<EmployeeForm
										value={value}
										countries={countries}
										getCity={getCity}
										onChange={this.onChange}
										getCityFromCountry={this.getCityFromCountry}
										addEmployee={this.addEmployee}
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
	console.log(state)
	return{
		employees: state.firestore.ordered.employees,
		countries: state.countries.countries
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		inputEmployee: (newEmployee) =>  dispatch(inputEmployee(newEmployee)),
		deleteEmployee: (employeeId) =>  dispatch(deleteEmployee(employeeId)),
		updateEmployee: (employee) =>  dispatch(updateEmployee(employee))
	}
}

export default compose(
		connect(mapStateToProps, mapDispatchToProps),
		firestoreConnect([{
			collection: 'employees', orderBy: ['createdAt', 'desc']
		}])
	)(DataEmployee)