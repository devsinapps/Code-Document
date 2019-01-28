import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class SideNavigations extends Component{
	render(){
		return(
			<div className='sideNavigations'>
				<div className='Menu'>
					<ul>
						<li className='text-center'>
							<Link to='/'> Code Document </Link>
						</li>
						<Dropdown title="Authentication">
							<ul>
								<li> 
									<Link to='/'> Sign In </Link> 
								</li>
								<li> <Link to='/auth'> Multistep </Link> </li>
							</ul>
						</Dropdown>
						<Dropdown title="Crud">
							<ul>
								<li> <Link to='/firebasecrud'> Firebase - Crud </Link> </li>
								<li> <Link to='/'> Graphql - Crud </Link> </li>
								<li> <Link to='/reduxcrud'> Redux - Crud </Link> </li>
							</ul>
						</Dropdown>
						<Dropdown title="Fetching Data">
							<ul>
								<li> <Link to='/food2fork'> Food 2 Fork </Link> </li>
								<li> <Link to='/openweathermap'> OpenweatherMap </Link> </li>
								<li> <Link to='/unsplash'> Unsplash </Link> </li>
							</ul>
						</Dropdown>
					</ul>
				</div>
			</div>
		)
	}
}

export default SideNavigations

class Dropdown extends React.Component{
	state = {
		isExpanded: false
	}

	toggle = () => {
		console.log(this.refs.inner.clientHeight)
		this.setState({
			isExpanded: !this.state.isExpanded,
			currentHeight: this.refs.inner.clientHeight
		})
	}
	render(){
		const { title, children } = this.props
		const { currentHeight } = this.state
		const { isExpanded } = this.state
		const styleDropdown = isExpanded ? currentHeight : '0'
		const activeDropdown = isExpanded ? 'active' : ''
		return(
			<div className='dropdown'>
				<li onClick={this.toggle}>
					<a href='#'> {title} </a>
					<FontAwesomeIcon icon='angle-right' className={'dropdownIcon' + ' ' + activeDropdown}/>
				</li>
				<div className='dropdownMenu' style={{height: styleDropdown}}>
					<div className='menu' ref="inner">
						{children}
					</div>
				</div>
			</div>
		)
	}
}
