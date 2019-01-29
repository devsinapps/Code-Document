import React from 'react'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class StepSecurity extends React.Component{
	render(){
		const { value } = this.props 
		const enabled = value.keyPass.length > 0 &&
						value.password.length > 0 
		return(
			<div className='SIHR_SignUp'>
				<Container>
					<Row>
						<Col lg='6' className='mx-auto'>
							<Card>
								<CardBody>
									<Form>
										<FormGroup>
											<Label htmlFor='keyPass'> Password </Label>
											<Input 
												id='keyPass'
												type='password'
												onChange={this.props.onChange}	
											/>
										</FormGroup>
										<FormGroup>
											<Label htmlFor='password'> Password </Label>
											<Input 
												id='password'
												type='password'
												onChange={this.props.onChange}	
											/>
										</FormGroup>
										<FormGroup>
											<Button block disabled={!enabled} onClick={this.props.onSubmit}> Sign Up </Button>
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

export default StepSecurity