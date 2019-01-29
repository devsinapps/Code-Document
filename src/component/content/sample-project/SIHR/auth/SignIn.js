import React from 'react'
//Actions
	import { signIn } from './../../../../../store/actions/sihrAuthActions'
//Tools
import { connect } from 'react-redux'

import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
class SignIn extends React.Component{
	state = {
		email: '',
		password: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.signIn(this.state)
	}
	render(){
		return(
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
					<Label htmlFor="email"> Email </Label>
					<Input
						id='email'
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="password"> Password </Label>
					<Input
						id='password'
						type='password'
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Button block> Sign In </Button>
				</FormGroup>
			</Form>
		)
	}
}

const mapStateToProps = (state) => {
	return{

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signIn: (credentials) => dispatch(signIn(credentials))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)