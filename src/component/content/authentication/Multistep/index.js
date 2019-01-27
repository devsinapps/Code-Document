import React, { Component } from 'react'
import Information from './step/Information'
import Contact from './step/Contact'
import Security from './step/Security'
import Success from './step/Success'
class FormSignUpMultiStep extends Component{
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

	nextStep = () => {
		const { step } = this.state
		this.setState({
			step: step + 1
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	//Handle Format Email 
	nextStepAtContact = () => {
		const { email,step } = this.state
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!regex.test(email)){
			return alert('Email Invalid')
		}else{
			this.setState({
				step: step + 1
			})
		}
	}

	//Handle onChange in Form Phone
	handleChangePhone = (e) => {
		const { phone } = this.state
		const rest  = e.target.value
		if(e.target.validity.valid){
			this.setState({
				phone: rest
			})
		}else if(rest === '' || rest === '-'){
			this.setState({
				phone: rest
			})
		}
	}

	//Handle Form After all input is full of value 
	onSubmit = (e) => {
		const { step, keyPass, password } = this.state 
		if(keyPass !== password){
			return alert('password Must be same')
		}else{
			this.setState({
				step: step + 1
			})
		}
	}

	
	render(){
		console.log(this.state)
		const { step } = this.state
		const { firstName, lastName, gender, age, email, phone, keyPass, password } = this.state
		const value = { firstName, lastName, gender, age, email, phone, keyPass, password }
		switch(step){
			case 1:
				return(
					<Information 
						value={value}
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						
					/>
				)
			case 2:
				return(
					<Contact 
						value={value}
						handleChange={this.handleChange}
						handleChangePhone={this.handleChangePhone}
						nextStepAtContact={this.nextStepAtContact}
					/>
				)
			case 3:
				return(
					<Security 
						value={value}
						handleChange={this.handleChange}
						onSubmit={this.onSubmit}
					/>
				)
			case 4:
				return(
					<Success 
						value={value}
					/>
				)
			default:
				return null
		}
	}
}

export default FormSignUpMultiStep