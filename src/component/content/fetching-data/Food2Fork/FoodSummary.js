import React from 'react'
import { Link } from 'react-router-dom'
import { Row, CardColumns, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap'
class FoodSummary extends React.Component{
	render(){
		const { recipes } = this.props
		const displayButton = recipes.length > 0 ? <Button onClick={this.props.nextPageRecipes}> Next Page </Button> : null
		return(
			<Row>
				<CardColumns lg='3'>
				{recipes && recipes.map((recipe)=>{
					return(
					<Link to={'/fooddetail/'+recipe.recipe_id}>
					<Card className='mb-3'  key={recipe.recipe_id}>
						<CardImg top src={recipe.image_url} />
						<CardBody>
							<CardTitle> {recipe.title} </CardTitle>
							<CardText> Publisher: {recipe.publisher} </CardText>
						</CardBody>
					</Card>
					</Link>
					)
				})}
				</CardColumns>
				{displayButton}
			</Row>
		)
	}
}

export default FoodSummary