import React from 'react'
	//Actions
	import { addMusic } from './../../../../store/actions/reduxActions'
	import { deleteMusic } from './../../../../store/actions/reduxActions'
	import { updateMusic } from './../../../../store/actions/reduxActions'
	//Component
	import ReduxTable from './ReduxTable'
	import ReduxForm from './ReduxForm'
	//Tools
	import { connect } from 'react-redux'

import { Container, Row, Col, Card, CardBody,Form, FormGroup, Label, Input, CustomInput, Button, Breadcrumb, BreadcrumbItem  } from 'reactstrap'
class ReduxCrud extends React.Component{
	state = {
		id: null,
		band:'',
		genre:'',
		song : '',
		album:'',
		topsell:''
	}

	//Handle State for Update Data
	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	//Get Data Row Table
	getDataRow = (music) => {
		console.log(music)
		this.setState({
			id: music.id,
			band:music.band,
			genre: music.genre,
			song : music.song,
			album: music.album,
			topsell: music.topsell
		})
	}


	//Handle Input Form
	onSubmit = (e) => {
		e.preventDefault()
		const band = e.target.band.value
		const genre = e.target.genre.value
		const song = e.target.song.value
		const album = e.target.album.value
		const topsell = e.target.topsell.value

		const data = {
			id: new Date(),
			band: band,
			genre: genre,
			song: song,
			album: album,
			topsell: topsell 
		}

		this.props.addMusic(data)

		// this.props.dispatch({
		// 	type: "ADD_MUSIC",
		// 	data
		// })
	}


	//Handle Delete Data
	deleteMusic = (e) => {
		e.preventDefault()
		const { id } = this.state
		const check = window.confirm('Delete Music?')
		if(check === true){
			this.props.deleteMusic(id)
			// this.props.dispatch({
			// 	type: "DELETE_MUSIC",
			// 	id: id
			// })
		}else{
			return null
		}
	}

	//handle Update Data
	updateMusic = (e) => {
		e.preventDefault();
		//Take Value from State
		const  { id, band, genre, song, album, topsell } = this.state 
		const check = window.confirm('Update Music?')
		if(check === true){
			const data = {
				id: id,
				updateBand: band,
				updateGenre: genre,
				updateSong: song,
				updateAlbum: album,
				updateTopsell: topsell
			}

			this.props.updateMusic(data)

			// this.props.dispatch({
			// 	type: "UPDATE_MUSIC",
			// 	id: id,
			// 	data: data
			// })
		}else{
			return null
		}
	}
	render(){
		const { id, band, genre, song, album, topsell } = this.state
		const { musicInfo } = this.props  
		const value = { id, band, genre, song, album, topsell }
		return(
			<div className='ReduxCrud'>
				<Container fluid>
					<Breadcrumb>
				        <BreadcrumbItem active> Redux Crud </BreadcrumbItem>
				    </Breadcrumb>
					<Row>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardBody>
									<ReduxTable 
										musicInfo={musicInfo}
										getDataRow={this.getDataRow}
									/>
								</CardBody>
							</Card>
						</Col>
						<Col lg='6' className='mx-auto'>
							<Card className='mb-3'>
								<CardBody>
									<ReduxForm 
										value={value}
										onSubmit={this.onSubmit}
										onChange={this.onChange}
										deleteMusic={this.deleteMusic}
										updateMusic={this.updateMusic}
									/>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		musicInfo: state.reduxCrud 
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addMusic: (data) => dispatch(addMusic(data)),
		deleteMusic:(id) => dispatch(deleteMusic(id)),
		updateMusic:(data) => dispatch(updateMusic(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCrud)



/*
Note Actions 
	1. Use reduxActions in folder store/actions
	2. Use reduxCrudReducer in folder store/reducers
*/