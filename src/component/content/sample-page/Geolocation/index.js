import React from 'react'
//Actions
import { inputAttendance } from './../../../../store/actions/geoActions'
//Tools
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody, Button, Table } from 'reactstrap'
const API_KEY = "AIzaSyCnP6n_1bOdq_EbpoNJwaBW7Ks0-nVpvwo"
class Geolocation extends React.Component{
	state = {
		latitude: '',
		longitude: '',
		// results: {},
		location: ''
	}

	componentDidMount(){
		if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition((position)=>{
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				})
			})
			}else{
				alert('Geolocation not Support on your browser')
			}
		
	}
	getLocation = async (e) => {
		const latitude = this.state.latitude
		const longitude = this.state.longitude
		const data_reverse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${API_KEY}`)
		const data = await data_reverse.json()
		this.setState({
			// results: data.results[0],
			location: data.results[0].formatted_address
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.inputAttendance(this.state)
	}
	render(){
		console.log(this.state)
		const { latitude, longitude } = this.state
		const enabled = latitude.length != '' && longitude.length != ''
		const alert = latitude.length != '' && longitude.length != '' ? '' : 'Harus Enabled Share location, Refresh halaman'
		return(
			<div className='Geolocation'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Card>
								<CardBody>
									<Button onClick={this.getLocation} disabled={!enabled}> Get </Button>
									<Button onClick={this.onSubmit} disabled={!enabled}> Save </Button>
									{alert}
									<p> {this.state.latitude} && {this.state.longitude} </p>
									<Table hover bordered striped responsive size='sm'>
										<thead>
											<tr>
												<th> Kota </th>
											</tr>
										</thead>
										<tbody>	
											
										</tbody>
									</Table>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		inputAttendance: (newData) => dispatch(inputAttendance(newData))
	}
}

export default connect(null, mapDispatchToProps)(Geolocation)