import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class Dashboard extends React.Component{
	render(){
		return(
			<div className="Dashboard">
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Card>
								<CardBody>
									Dashboard
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Dashboard