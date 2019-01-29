import React from 'react'
//Actions
import { signUp } from './../../../../../store/actions/sihrAuthActions'
//Tools
import { connect } from 'react-redux'
//Component
import StepInformation from './signup-step/StepInformation'
import StepContact from './signup-step/StepContact'
import StepSecurity from './signup-step/StepSecurity'

class SignUp extends React.Component{
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		gender: '',
		age: '',
		email: '',
		phone: '',
		keyPass: '',
		password: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	nextStep = (e) => {
		this.setState({
			step: 2
		})
	}

	nextStepAtContact = (e) => {
		this.setState({
			step: 3
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.signUp(this.state)
	}
	render(){
		console.log(this.state)
		const { step } = this.state
		const { firstName, lastName, gender, age, email, phone, keyPass, password } = this.state
		const value = { firstName, lastName, gender, age, email, phone, keyPass, password }
		switch(step){
			case 1:
				return(
					<StepInformation 
						value={value}
						onChange={this.onChange}
						nextStep={this.nextStep}
					/>
				)
			case 2:
				return(
					<StepContact 
						value={value}
						onChange={this.onChange}
						nextStepAtContact={this.nextStepAtContact}
					/>
				)
			case 3:
				return(
					<StepSecurity 
						value={value}
						onChange={this.onChange}
						onSubmit={this.onSubmit}
					/>
				)
			default:
				return null
		}
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)