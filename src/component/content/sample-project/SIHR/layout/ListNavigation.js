import React from 'react'
//Tools
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'
class ListNavigation extends React.Component{
	render(){
		return(
			<ListGroup>
				<ListGroupItem> Dashboard </ListGroupItem>
				<ListGroupItem> 
					<Link to='/sihr-kanban'>
						KanBan 
					</Link>
				</ListGroupItem>
				<Dropdown title="HR Menu">
					<ListGroup>
						<ListGroupItem>
							<Link to='/Link'> 
							Submission 
							</Link>
						</ListGroupItem>
						<ListGroupItem>
							<Link to='/Link'> 
							Recruitment 
							</Link>
						</ListGroupItem>
					</ListGroup>
				</Dropdown>
				<Dropdown title="Admin Menu">
					<ListGroup>
						<ListGroupItem>
							<Link to='/sihr-data-user'> 
							Data User 
							</Link>
						</ListGroupItem>
						<ListGroupItem>
							<Link to='/sihr-data-employee'> 
							Data Employee 
							</Link>
						</ListGroupItem>
					</ListGroup>
				</Dropdown>
			</ListGroup>
		)
	}
}

export default ListNavigation


class Dropdown extends React.Component{
	state = {
		isExpanded: false
	}

	toggle = () => {
		this.setState({
			isExpanded: !this.state.isExpanded,
			currentHeight: this.refs.inner.clientHeight
		})
	}
	render(){
		const { isExpanded, currentHeight } = this.state
		const { title, children } = this.props
		const Height = isExpanded ? currentHeight : "0"; 
		return(
			<div className='Dropdown'>
				<ListGroupItem onClick={this.toggle}> {title} </ListGroupItem>
				<div className='dropdownMenu' style={{height: Height+'px', transition: 'all .3s', overflow: 'hidden'}}>
					<div className='menu' ref='inner'>
						{children}
					</div>
				</div>
			</div>
		)
	}
}