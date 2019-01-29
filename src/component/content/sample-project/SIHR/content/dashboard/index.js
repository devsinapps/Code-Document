import React from 'react'
//Actions
import { signOut } from './../../../../../../store/actions/sihrAuthActions'
//Component
import ListNavigation from './ListNavigation'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap'
class DashboardSIHR extends React.Component{
	render(){
		const { auth } = this.props 
		if(auth.uid == null) return <Redirect to='/sihr-auth' />
		return(
			<div className='DashboardSIHR'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Card>
								<CardBody>
									<Button onClick={this.props.signOut}> Log Out </Button>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg='3'>
							<Card>
								<CardBody>
									<ListNavigation />
								</CardBody>
							</Card>
						</Col>
						<Col lg='9'>
							<Card>
								<CardBody>
									
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
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () =>  dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSIHR)