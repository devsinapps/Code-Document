import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'

export const FormSearch = (props) => {
	return(
		<Form onSubmit={props.getInfoWeather}>
			<Row form>
				<Col md={8}>
					<FormGroup>
						<Input 
							id='keySearch'
							placeholder="Type City..."
						/>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Button block> Search </Button>
					</FormGroup>
				</Col>
			</Row>
		</Form>
	)
}