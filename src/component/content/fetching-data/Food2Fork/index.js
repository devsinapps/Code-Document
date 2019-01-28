import React from 'react'
//Component
import FormSearch from './FormSearch'
import FoodSummary from './FoodSummary'
//Style
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
//Variable
const API_KEY = "5c9aead891ab3c3bf462ec1e3d1a99ee"
class Food2Fork extends React.Component{
	state = {
		recipes: [],
		defaultPage: 1,
		keySearch: ''
	}

	getRecipes = async (e) => {
		e.preventDefault()
		const { defaultPage } = this.state
		const keySearch = e.target.keySearch.value
		const data_source = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${keySearch}&page=${defaultPage}`)
		const data = await data_source.json();
		this.setState({
			recipes: data.recipes,
			keySearch: keySearch,
			defaultPage: 1
		})
	}

	nextPageRecipes = async (e) => {
		e.preventDefault();
		const { defaultPage, keySearch } = this.state
		const nextPage = defaultPage + 1
		const data_source = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${keySearch}&page=${nextPage}`)
		const data = await data_source.json();
		this.setState({
			recipes: data.recipes,
			defaultPage: nextPage
		})
	}


	//Local Storage
		//Keep Data From States, if user Refresh Page
	componentWillMount(){
		localStorage.getItem('recipes') && this.setState({
			recipes: JSON.parse(localStorage.getItem('recipes'))
		})
	}

		//Handle Data or Keep Data, To save in local Storage in browser
	componentWillUpdate(nextProps, nextState){
		localStorage.setItem('recipes', JSON.stringify(nextState.recipes))
	}
	render(){
		const { recipes } = this.state

		return(
			<div className='Food2Fork'>
				<Container fluid>
					<Row>
						<Col lg='6' className='mx-auto'>
							<Card className='mb-3'>
								<CardBody>
									<FormSearch 
										getRecipes={this.getRecipes}
									/>
								</CardBody>
							</Card>
						</Col>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardBody>
									<FoodSummary 
										recipes={recipes}
										nextPageRecipes={this.nextPageRecipes}
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

export default Food2Fork