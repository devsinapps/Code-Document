import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
class KanbanDetail extends React.Component{
	render(){
    const { modal, value } = this.props
		return(
	   <div>
        <Modal isOpen={modal} toggle={this.props.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.props.toggleModal}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label htmlFor='jobTitle'> Job Title </Label>
                <Input
                  id='jobTitle'
                  value={value.jobTitle}
                  onChange={this.props.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='jobDesk'> Job Desk </Label>
                <Input
                  id='jobDesk'
                  value={value.jobDesk}
                  onChange={this.props.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='deadLine'> Dead Line </Label>
                <Input
                  type='date'
                  id='deadLine'
                  value={value.deadLine}
                  onChange={this.props.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='description'> Description </Label>
                <textarea 
                  className='form-control'
                  id='description'
                  value={value.description}
                  onChange={this.props.onChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.updateKanban}>Update</Button>{' '}
            <Button color="secondary" onClick={() => this.props.deleteKanban(value.kanbanId)}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.props.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
		)
	}
}

export default KanbanDetail