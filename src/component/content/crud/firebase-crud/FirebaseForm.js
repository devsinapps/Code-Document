import React from 'react'
import { Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class FirebaseForm extends React.Component{
	state = {
		city: []
	}

	getCityFromCountry = (states) => {
		this.setState({
			city: states
		})
	}
	render(){
		const { city } = this.state
		const { value, countries } = this.props
		const enabled = value.firstName.length > 0 && 
						value.lastName.length > 0 && 
						value.age.length > 0 && 
						value.gender.length > 0 && 
						value.country.length > 0 && 
						value.city.length > 0 && 
						value.address.length > 0 && 
						value.education.length > 0;
		return(
			<Form>
				<FormGroup>
					<Label htmlFor="firstName"> First Name </Label>
					<Input 
						id="firstName"
						value={value.firstName}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="lastName"> Last Name </Label>
					<Input 
						id="lastName"
						value={value.lastName}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="age"> Age </Label>
					<Input 
						type="number"
						id="age"
						value={value.age}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="gender"> Gender </Label>
					<CustomInput type='select' id="gender" onChange={this.props.onChange}>
						<option value=""> Select Gender </option>
						<option value="Male"> Male </option>
						<option value="Female"> Female </option>
					</CustomInput>
				</FormGroup>

				<FormGroup>
					<Label htmlFor="country"> Country </Label>
					<CustomInput type="select" id='country' onChange={this.props.onChange}>
						<option value=""> Select Country </option>
						{countries.map((country)=>{
							return(
								<option value={country.country} onClick={() => this.getCityFromCountry(country.states)}> {country.country} </option>
							)
						})}
					</CustomInput>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="city"> City </Label>
					<CustomInput type='select' id='city' onChange={this.props.onChange}>
						<option value=""> Select City </option>
						{city.map((list)=>{
							return(
								<option value={list}> {list} </option>
							)
						})}
					</CustomInput>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="address"> Address </Label>
					<textarea 
						id="address"
						className='form-control'
						value={value.address}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="education"> Education </Label>
					<textarea 
						id="education"
						className='form-control'
						value={value.education}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button color="primary" onClick={this.props.onSubmit} disabled={!enabled}> Save </Button>{' '}
					<Button color="warning" onClick={this.props.updateEmployee} > Update </Button>{' '}
					<Button color="danger" onClick={() => this.props.deleteEmployee(value.employeeId)}> Delete </Button>{' '}
					<Button color="info"> Reset </Button>{' '}
				</FormGroup>
			</Form>
		)
	}
}

export default FirebaseForm