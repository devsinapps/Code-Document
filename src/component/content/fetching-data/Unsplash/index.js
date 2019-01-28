import React, { Component } from 'react'
	//Component
	import FormSearch from './FormSearch'
	import PhotoSummary from './PhotoSummary'
import { Container, Row, Col, Card, CardImg, CardBody, CardColumns, CardText, Button } from 'reactstrap'
const API_KEY = "a9f020ade0a6ba6d2ba84ba91345fb4e73fa64ad1c0b6221233b55c6f12c3b29"
class Unsplash extends Component{
	state = {
		random: [],
		searchPhoto: [],
		keySearch: '',
		defaultPage: 1
	}

	//Get Random Photo
	componentDidMount(){
		setTimeout(()=>{
			fetch(`https://api.unsplash.com/photos?per_page=30&client_id=${API_KEY}`)
			.then(response => response.json())
			.then(data => this.setState({
				random: data
			}))
		}, 3000)
		
	}

	//Handle Input Form
	// onChange =  (e) => {
	// 	const keySearch = e.target.value
	// 	this.setState({
	// 		keySearch: keySearch
	// 	})
	// }

	//Handle Submit 
	onSubmit = async (e) => {
		e.preventDefault();
		const { defaultPage } = this.state
		const keySearch = e.target.keySearch.value
		const get_data = await fetch(`https://api.unsplash.com/search/collections?per_page=30&page=${defaultPage}&query=${keySearch}&client_id=${API_KEY}`)
		const data = await get_data.json();
		this.setState({
			searchPhoto: data.results,
			defaultPage: 1,
			keySearch: keySearch
		})
	}

	//Handle Get Next List Photo
	getNextSearch = async (e) => {
		e.preventDefault()
		const { defaultPage, keySearch } = this.state
		const nextPage = defaultPage + 1
		const get_data = await fetch(`https://api.unsplash.com/search/collections?per_page=30&page=${nextPage}&query=${keySearch}&client_id=${API_KEY}`)
		const data = await get_data.json();
		this.setState({
			searchPhoto: data.results,
			defaultPage: nextPage
		})
	}

	//LocalStorage
		//Keep Data From States, if user Refresh Page
		componentWillMount(){
			setTimeout(()=>{
				localStorage.getItem('searchPhoto') && this.setState({
					searchPhoto: JSON.parse(localStorage.getItem('searchPhoto'))
				})
			}, 3000)
			
		}

		//Handle Data or Keep Data, To save in local Storage in browser
		componentWillUpdate(nextProps, nextState){
			localStorage.setItem('searchPhoto', JSON.stringify(nextState.searchPhoto))
		}
	render(){
		console.log(this.state)
		const { random, searchPhoto, keySearch } = this.state

		const viewRandom = 
			<CardColumns>
			{random && random.map((img)=>{
				const desc = img.description !== null ? img.description : 'photo of the day'
				return(
					<Card key={img.id}>
						<CardImg top src={img.urls.thumb} />
						<CardBody>
							<CardText> {desc} </CardText>
						</CardBody>
					</Card>
					)
				
			})}
			</CardColumns>;

		const viewSearch =
			<CardColumns>
			{searchPhoto && searchPhoto.map((img)=>{
				const desc = img.description !== null ? img.description : keySearch
				return(
					<Card key={img.id}>
						<CardImg top src={img.cover_photo.urls.thumb} />
						<CardBody>
							<CardText> {desc} </CardText>
						</CardBody>

					</Card>
					)
				
			})}
			<Button onClick={this.getNextSearch}> Next </Button>
			</CardColumns>;

		const view = searchPhoto.length > 0 ?  viewSearch : viewRandom;
		return(
			<div className='Unsplash'>
				<Container fluid>
					<div className='text-center'>
						<h2> Fetch Api From unsplash.com </h2>
					</div>
					<Row>
						<Col lg='6' className='mx-auto'>
							<Card className='mb-3'>
								<CardBody>
									<FormSearch 
										onSubmit={this.onSubmit}
									/>
								</CardBody>
							</Card>
						</Col>
						<Col lg='10' md='10' sm='10' className='mx-auto'>
							<Row>
								{view}
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Unsplash