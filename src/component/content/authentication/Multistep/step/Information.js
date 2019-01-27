import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
class Information extends Component{
	continue = () => {
		this.props.nextStep()
	}
	render(){
		const { handleChange, value } = this.props 
		const enabled = value.firstName.length > 0 &&
						value.lastName.length > 0 &&
						value.gender.length > 0 &&
						value.age.length > 0;
		const inStep = {
			backgroundColor: '#1abc9c',
			color: '#fdfdfd'
		}
		return(
			<div className='authMultistep'>
				<Container>
					<Row>
						<Col lg='6' className='mx-auto'>
							<Card>
								<CardHeader>
									<Row>
										<Col md='3'>
											<div className='number' style={inStep}>
												<i> 1 </i>
											</div>
										</Col>
										<Col md='3'>
											<div className='number'>
											 	<i> 2 </i>
											</div>
										</Col>
										<Col md='3'>
											<div className='number'>
											 	<i> 3 </i>
											</div>
										</Col>
										<Col md='3'>
											<div className='number'>
											 	<i> 4 </i>
											</div>
										</Col>
									</Row>
								</CardHeader>
								<CardBody>
									<FormGroup>
										<Label htmlFor='firstName'> First Name </Label>
										<Input type='text' id="firstName" onChange={handleChange}/>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='lastName'> Last Name </Label>
										<Input type='text' id="lastName" onChange={handleChange} />
									</FormGroup>
									<Row form>
										<Col md={8}>
											<FormGroup>
												<Label htmlFor='gender'> Gender </Label>
												<CustomInput type='select' id="gender" onChange={handleChange}>
													<option value=""> Select Gender </option>
													<option value="Male"> Male </option>
													<option value="Female"> Female </option>
												</CustomInput>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label htmlFor='age'> Age </Label>
												<Input 
													type='number' 
													id="age" 
													onChange={handleChange}/>
											</FormGroup>
										</Col>
									</Row>
									<FormGroup>
										<Button block onClick={this.continue} disabled={!enabled}> Next </Button>
									</FormGroup>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Information