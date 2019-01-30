import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class KanbanForm extends Component{
	render(){
		return(
			<Form onSubmit={this.props.inputKanban}>
				<Row form>
					<Col md={2}>
						<FormGroup>
							<Label htmlFor="jobTitle"> Job Title </Label>
							<Input 
								id='jobTitle'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md={3}>
						<FormGroup>
							<Label htmlFor="jobDesk"> Job Desk </Label>
							<Input 
								id='jobDesk'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label htmlFor="description"> Description </Label>
							<Input 
								id='description'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md={2}>
						<FormGroup>
							<Label htmlFor="deadLine"> Dead Line </Label>
							<Input 
								type='date'
								id='deadLine'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md={1}>
						<FormGroup>
							<Label htmlFor="action"> &nbsp; </Label>
							<Button block> Post </Button>
						</FormGroup>
					</Col>
				</Row>
			</Form>
		)
	}
}

export default KanbanForm