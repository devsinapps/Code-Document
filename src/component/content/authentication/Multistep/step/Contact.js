import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
class Contact extends Component{
	continue = () => {
		this.props.nextStep()
	}
	render(){
		const { handleChange, value } = this.props 
		const enabled = value.email.length > 0 &&
						value.phone.length > 0 ;
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
											<div className='number' style={inStep}>
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
										<Label htmlFor='email'> Email </Label>
										<Input 
											id="email" 
											onChange={handleChange}
										/>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='phone'> Phone Number </Label>
										<Input 
											id="phone"
											min="0"
											max="100"
											maxLength="15" 
											value={value.phone}
											pattern="^-?[0-9]\d*\.?\d*$"
											onChange={this.props.handleChangePhone} 
										/>
									</FormGroup>
									<FormGroup>
										<Button block onClick={this.props.nextStepAtContact} disabled={!enabled}> Next </Button>
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

export default Contact