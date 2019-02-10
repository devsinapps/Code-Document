import React from 'react'
import { Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class ReduxForm extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.id !== null	
		return(
			<Form onSubmit={this.props.onSubmit}>
				<FormGroup>
					<Label htmlFor='band'> Band </Label>
					<Input
						id='band'
						value={value.band}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='genre'> Genre </Label>
					<Input
						id='genre'
						value={value.genre}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='song'> Song Title </Label>
					<Input
						id='song'
						value={value.song}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='album'> Album </Label>
					<Input
						id='album'
						value={value.album}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='topsell'> Top Sell </Label>
					<Input
						id='topsell'
						value={value.topsell}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button color="primary" disabled={enabled}> Save </Button> {' '}
					<Button color="warning" onClick={this.props.deleteMusic} disabled={!enabled}> Delete </Button> {' '}
					<Button color="danger" onClick={this.props.updateMusic} disabled={!enabled}> Update </Button> {' '}
					<Button color="info" onClick={this.props.resetButton}> 
						<a href='/'> Reset </a>
					</Button> {' '}
				</FormGroup>
			</Form>
		)
	}
}

export default ReduxForm