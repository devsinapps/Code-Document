import React from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, CardFooter } from 'reactstrap'
class KanbanSummary extends React.Component{
	render(){
		const { kanban } = this.props
		return( 
			<Row>
				{kanban && kanban.map((kanbanList)=>{
					return(
						<Col lg='3' key={kanbanList.id}>
							<Card className='mb-3'>
								<CardBody>
									<CardTitle> {kanbanList.jobTitle} </CardTitle>
									<CardText> {kanbanList.jobDesk} </CardText>
									<small> DeadLine: {kanbanList.deadLine} </small>
									<small> Done: {kanbanList.doneDate} </small>
								</CardBody>
								<CardFooter> <Button onClick={() => this.props.toggleModal(kanbanList)}> Detail </Button> </CardFooter>
							</Card>
						</Col>
					)
				})}
				
			</Row>
		)
	}
}

export default KanbanSummary