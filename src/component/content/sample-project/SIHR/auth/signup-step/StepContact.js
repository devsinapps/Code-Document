import React from 'react'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class StepContact extends React.Component{
	render(){
		const { value } = this.props 
		const enabled = value.email.length > 0 &&
						value.phone.length > 0 
		return(
			<div className='SIHR_SignUp'>
				<Container>
					<Row>
						<Col lg='6' className='mx-auto'>
							<Card>
								<CardBody>
									<Form>
										<FormGroup>
											<Label htmlFor='email'> Email </Label>
											<Input 
												id='email'
												onChange={this.props.onChange}
											/>
										</FormGroup>
										<FormGroup>
											<Label htmlFor='phone'> Phone Number </Label>
											<Input 
												id='phone'
												onChange={this.props.onChange}
											/>
										</FormGroup>
										<FormGroup>
											<Button block onClick={this.props.nextStepAtContact} disabled={!enabled}> Next </Button>
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

export default StepContact