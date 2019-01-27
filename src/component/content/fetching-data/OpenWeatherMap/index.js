import React from 'react'
	//Component
	import {FormSearch} from './FormSearch'
	import WeatherSummary from './WeatherSummary'

import { Container, Row, Col, Card, CardBody } from 'reactstrap'
const API_KEY = "6cca5d9ad193e48a8fe2393bb7ce85d3"
class OpenWeatherMap extends React.Component{
	state = {
		infoWeather: []
	}

	//Handle Input Form
	getInfoWeather = async (e) => {
		e.preventDefault();
		let keySearch = e.target.keySearch.value
		let data_source = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${keySearch}&appid=${API_KEY}`)
		let data = await data_source.json();
		this.setState({
			infoWeather: data.list
		})
	}
	render(){
		const { infoWeather } = this.state
		return(
			<div className='OpenWeatherMap'>
				<Container fluid>
					<div className='text-center'>
						<h2> Fetch Api From Openweathermap.org </h2>
					</div>
					<Row>
						<Col lg='6' className='mx-auto'>
							<Card className='mb-3'>
								<CardBody>
									<FormSearch 
										getInfoWeather={this.getInfoWeather}
									/>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<WeatherSummary 
							infoWeather={infoWeather}
						/>
				</Container>
			</div>
		)
	}
}

export default OpenWeatherMap