import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap'
class Success extends Component{
	continue = () => {
		this.props.nextStep()
	}
	render(){
		const { value } = this.props
		return(
			<div>
				<Container>
					<Row>
						<Col lg='6' className='mx-auto'>
							<Card>
								<CardBody>
									<CardText> Congratulations </CardText>
									<ul>
										<li>{value.firstName + ' ' + value.lastName}</li>
										<li>{value.gender}</li>
										<li>{value.age}</li>
										<li>{value.email}</li>
										<li>{value.phone}</li>
									</ul>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Success