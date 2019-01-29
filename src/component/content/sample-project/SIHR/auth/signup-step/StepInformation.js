import React from 'react'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class StepInformation extends React.Component{
	render(){
		const { value } = this.props 
		const enabled = value.firstName.length > 0 &&
						value.lastName.length > 0 &&
						value.gender.length > 0 &&
						value.age.length > 0
		return(
			<div className='SIHR_SignUp'>
				<Container>
					<Row>
						<Col lg='6' className='mx-auto'>
							<Card>
								<CardBody>
									<Form>
										<FormGroup>
											<Label htmlFor='firstName'> First Name </Label>
											<Input 
												id='firstName'
												onChange={this.props.onChange}
											/>
										</FormGroup>
										<FormGroup>
											<Label htmlFor='lastName'> Last Name </Label>
											<Input 
												id='lastName'
												onChange={this.props.onChange}
											/>
										</FormGroup>
										<Row form>
											<Col md={8}>
												<FormGroup>
													<Label htmlFor='gender'> Gender </Label>
													<CustomInput type='select' id='gender' onChange={this.props.onChange}>
														<option value=''> Select Gender </option>
														<option value='Male'> Male </option>
														<option value='Female'> Female </option>
													</CustomInput>
												</FormGroup>
											</Col>
											<Col md={4}>
												<FormGroup>
													<Label htmlFor='age'> Age </Label>
													<Input
														type='number'
														id='age'
														onChange={this.props.onChange}
													/>
												</FormGroup>
											</Col>
										</Row>
										<FormGroup>
											<Button block onClick={this.props.nextStep} disabled={!enabled}> Next </Button>
										</FormGroup>
									</Form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default StepInformation