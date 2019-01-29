import React, { Component } from 'react'
//Actions
import { signOut } from './../../../../../store/actions/sihrAuthActions'
//Component
import SignIn from './SignIn'
import SignUp from './SignUp'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap'
class AuthenticationSIHR extends Component{
	state = {
		defaultCase: 1
	}

	signInCase = () => {
		this.setState({
			defaultCase: 1
		})
	}

	signUpCase = () => {
		this.setState({
			defaultCase: 2
		})
	}
	render(){
		const { defaultCase } = this.state
		const { auth } = this.props
		const viewAuth = defaultCase == 1 ? <SignIn /> : <SignUp />;
		const viewBtnSignOut = auth.uid != null ? <Button onClick={this.props.signOut}> Log Out </Button> : null;
		if(auth.uid != null) return <Redirect to='/sihr' /> ;
		return(
			<div className='AuthenticationSIHR'>
				<Container>
					<Row>
						<Col lg='10' className='mx-auto'>
							<Card>	
								<CardHeader>
									<Button onClick={this.signInCase}> Sign In </Button>
									<Button onClick={this.signUpCase}> Sign Up </Button>
									{viewBtnSignOut}
								</CardHeader>
								<CardBody>
									{viewAuth}
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
		signOut: () => dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationSIHR)