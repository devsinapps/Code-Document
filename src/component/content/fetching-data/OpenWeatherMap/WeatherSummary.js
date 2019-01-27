import React, { Component } from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'
class WeatherSummary extends Component{
	render(){
		const { infoWeather } = this.props
		console.log(infoWeather)
		return(
		<Row>
			{infoWeather && infoWeather.map((weather)=>{
				return(
					<Col lg='3' key={weather.id}>
						<Card className='mb-3'>
							<CardBody>
								<CardTitle> City: {weather.name} </CardTitle>
								<CardText> Country: {weather.sys.country} </CardText>
								<CardText> Temperature: {weather.main.temp} </CardText>
								<CardText> Humidity: {weather.main.humidity} </CardText>
								<CardText> Description: {weather.weather[0].description} </CardText>
							</CardBody>
						</Card>
					</Col>
				)
			})}
			
		</Row>
		)
	}
}

export default WeatherSummary