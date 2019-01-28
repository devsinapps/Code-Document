import React from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap'
const API_KEY = "5c9aead891ab3c3bf462ec1e3d1a99ee";
class FoodDetail extends React.Component{
	state = {
		recipe: {}
	}

	componentDidMount(){
		const idSearch = this.props.match.params.recipe_id
		fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${idSearch}`)
		.then(response => response.json())
		.then(data => this.setState({
			recipe: data.recipe
		}))
	}
	render(){
		const { recipe } = this.state
		return(
			<div className='FoodDetail'>
				<Container fluid>
					<Row>
						<Col lg='8' className='mx-auto'>
							<Card>
								<CardImg top src={recipe.image_url} alt='imageRecipe' />
								<CardBody>
									<CardTitle> {recipe.title} </CardTitle>
									<CardText> Publisher: {recipe.publisher} </CardText>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default FoodDetail