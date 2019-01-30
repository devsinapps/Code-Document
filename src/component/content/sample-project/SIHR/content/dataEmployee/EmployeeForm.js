import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class EmployeeForm extends React.Component{
	render(){
		const { value, countries, getCity } = this.props
		console.log(getCity)
		return(
			<Form>
				<FormGroup>
					<Label htmlFor='firstName'> First Name </Label>
					<Input
						id='firstName'
						value={value.firstName}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='lastName'> Last Name </Label>
					<Input
						id='lastName'
						value={value.lastName}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<Row>
					<Col md={8}>
						<FormGroup>
							<Label htmlFor='gender'> Gender </Label>
							<CustomInput type='select' id='gender' onChange={this.props.onChange}>
								<option value={value.gender}> {value.gender} </option>
								<option value='Male'> Male </option>
								<option value='Female'> Female </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label htmlFor='age' > Gender </Label>
							<Input
								type='number'
								id='age'
								value={value.age}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label htmlFor='lastName'> Country </Label>
					<CustomInput type='select' id='country' onChange={this.props.onChange}>
						<option value={value.country}> {value.country} </option>
						{countries.map((country)=>{
							return(
								<option value={country.country} key={country.country} onClick={()=>this.props.getCityFromCountry(country)}> {country.country} </option>
							)
						})}

					</CustomInput>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='lastName'> City </Label>
					<CustomInput type='select' id='city' onChange={this.props.onChange}>
						<option value={value.city}> {value.city} </option>
						{getCity.map((list)=>{
							return(
								<option value={list}> {list} </option>
							)
						})}
					</CustomInput>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='address'> Address </Label>
					<textarea 
						className='form-control' 
						id='address'
						value={value.address}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='education'> Education </Label>
					<Input
						id='education'
						value={value.education}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button color='primary' onClick={this.props.addEmployee}> Save </Button> {' '}
					<Button color='warning'  onClick={this.props.updateEmployee}> Update </Button> {' '}
					<Button color='danger' onClick={()=>this.props.deleteEmployee(value.employeeId)}> Delete </Button> {' '}
					<Button color='info'> Reset </Button> {' '}
				</FormGroup>
			</Form>
		)
	}
}

export default EmployeeForm