import React from 'react'
//Actions
import { inputKanban } from './../../../../../../store/actions/sihrKanbanActions'
import { deleteKanban } from './../../../../../../store/actions/sihrKanbanActions'
import { updateKanban } from './../../../../../../store/actions/sihrKanbanActions'
//Component
import KanbanSummary from './KanbanSummary'
import KanbanForm from './KanbanForm'
import KanbanDetail from './KanbanDetail'
//Tools
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class KanbanSIHR extends React.Component{
	state = {
		kanbanId: '',
		authorId: '',
		authorName: '',
		createdAt: '',
		deadLine: '',
		jobTitle: '',
		jobDesk: '',
		description: '',
		doneDate: '',
		modal: false
	}

	//Handle Value in Form
	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	//Handle or Get Detail data 
	toggleModal = (kanban) => {
		this.setState({
			modal: !this.state.modal,
			kanbanId: kanban.id,
			authorId: kanban.authorId,
			authorName: kanban.authorName,
			createdAt: kanban.createdAt,
			deadLine: kanban.deadLine,
			jobTitle: kanban.jobTitle,
			jobDesk: kanban.jobDesk,
			description: kanban.description,
			doneDate: kanban.doneDate,
		})
	}

	//Handle Form Input
	inputKanban = (e) => {
		e.preventDefault()
		this.props.inputKanban(this.state)
	}


	deleteKanban = (kanbanId) => {
		const check = window.confirm('Delete Kanban?')
		if(check === true){
			this.props.deleteKanban(kanbanId)
			this.setState({
				modal: !this.state.modal
			})
		}else{
			return null
		}
	}

	updateKanban = (e) => {
		e.preventDefault()
		const { kanbanId, authorId, authorName, createdAt, deadLine, jobTitle, jobDesk, description, doneDate, modal } = this.state
		const kanban = { kanbanId, authorId, authorName, createdAt, deadLine, jobTitle, jobDesk, description, doneDate, modal }
		const check = window.confirm('Update Kanban?')
		if(check === true){
			this.props.updateKanban(kanban)
			this.setState({
				modal: !this.state.modal
			})
		}else{
			return null
		}
	}
	render(){
		const { modal } = this.state
		const { kanbanId, jobTitle, jobDesk, description, doneDate } = this.state
		const { kanban } = this.props
		const value = { kanbanId, jobTitle, jobDesk, description, doneDate } 
		return(
			<div className='KanbanSIHR'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardBody>
									<KanbanForm 
										onChange={this.onChange}
										inputKanban={this.inputKanban}
									/>
								</CardBody>
							</Card>
						</Col>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardBody>
									<KanbanSummary 
										kanban={kanban}
										toggleModal={this.toggleModal}
									/>
								</CardBody>
							</Card>
						</Col>
						<KanbanDetail 
							modal={modal}
							value={value}
							toggleModal={this.toggleModal}
							onChange={this.onChange}
							deleteKanban={this.deleteKanban}
							updateKanban={this.updateKanban}
						/>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		kanban: state.firestore.ordered.kanban
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		inputKanban: (newJob) => dispatch(inputKanban(newJob)),
		deleteKanban: (kanbanId) => dispatch(deleteKanban(kanbanId)),
		updateKanban: (kanban) => dispatch(updateKanban(kanban))
	}
}

export default compose(
		connect(mapStateToProps, mapDispatchToProps),
		firestoreConnect([{
			collection: 'kanban', orderBy: ['createdAt', 'desc']
		}])
	)(KanbanSIHR)