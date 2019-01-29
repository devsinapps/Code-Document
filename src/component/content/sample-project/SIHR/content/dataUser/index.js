import React from 'react'
//Component
import UserTable from './UserTable'
import UserForm from './UserForm'
//Tools
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class DataUser extends React.Component{
	state = {
		userId: '',
		firstName: '',
		lastName: '',
		gender: '',
		initials: '',
		age: '',
		email: '',
		password: '',
		phone: '',
		createdAt:''
	}

	getDataRow = (user) => {
		console.log(user)
		this.setState({
			userId: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			gender: user.gender,
			initials: user.initials,
			age: user.age,
			email: user.email,
			password: user.password,
			phone: user.phone,
			createdAt:user.createdAt
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	render(){
		const { userId, firstName, lastName, gender, age, email, password, phone, createdAt } = this.state
 		const { users } = this.props
 		const value = { userId, firstName, lastName, gender, age, email, password, phone, createdAt }
		return(
			<div className='DataUserSIHR'>
				<Container>
					<Row>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardBody>
									<UserTable 
										users={users}
										getDataRow={this.getDataRow}
									/>
								</CardBody>
							</Card>
						</Col>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardBody>
									<UserForm 
										value={value}
										onChange={this.onChange}
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
		users: state.firestore.ordered.users
	}
}

export default compose(
		connect(mapStateToProps),
		firestoreConnect([{
			collection: 'users', orderBy:['createdAt', 'desc']
		}])
	)(DataUser)