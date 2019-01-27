import React from 'react'
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
class FormSearch extends React.Component{
	render(){
		return(
			<Form onSubmit={this.props.onSubmit}>
				<Row form>
					<Col md={8}>
						<FormGroup>
							<Input
								id='keySearch'
								placeholder="Type what you want search..."
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Button block>
								Search
							</Button>
						</FormGroup>
					</Col>
				</Row>
			</Form>
		)
	}
}

export default FormSearch