import React from 'react'
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
class FormSearch extends React.Component{
	render(){
		return(
			<Form onSubmit={this.props.getRecipes}>
				<Row form>
					<Col md={8}>
						<FormGroup>
							<Input
								id='keySearch'
								placeholder='Type Recipe...'
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
}

export default FormSearch