import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
class Security extends Component{
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
										<Label htmlFor='keyPass'> Password </Label>
										<Input type='password' id="keyPass" onChange={handleChange}/>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='password'> re-Password </Label>
										<Input type='password' id="password" onChange={handleChange}/>
									</FormGroup>
									<FormGroup>
										<Button block onClick={this.props.onSubmit} disabled={!enabled}> Next </Button>
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

export default Security