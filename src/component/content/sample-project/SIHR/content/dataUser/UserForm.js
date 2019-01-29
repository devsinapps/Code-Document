import React from 'react'
import { Row, Col, Form, FormGroup, Input, Label, CustomInput, Button } from 'reactstrap'
class UserForm extends React.Component{
	render(){
		const { value } = this.props
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
				<Row form>
					<Col md={8}>
						<FormGroup>
							<Label htmlFor='lastName'> Gender </Label>
							<CustomInput type='select' id='gender' onChange={this.props.onChange}>
								<option value={value.gender}> Select Gender </option>
								<option value=''> Select Gender </option>
								<option value=''> Select Gender </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label htmlFor='age'> Age </Label>
							<Input
								 id='age'
								type='number'
								value={value.age}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label htmlFor='email'> Email </Label>
					<Input
						id='email'
						value={value.email}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='phone'> Phone Number </Label>
					<Input
						id='phone'
						value={value.phone}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button color='primary'> Save </Button>{' '}
					<Button color='warning'> Update </Button>{' '}
					<Button color='danger'> Delete </Button>{' '}
					<Button color='info'> Reset </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default UserForm