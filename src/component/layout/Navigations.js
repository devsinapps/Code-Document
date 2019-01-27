import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Navigations extends React.Component{
	toggle = () => {
		const navbar = document.getElementsByClassName('navbar')[0];
		const content = document.getElementsByClassName('contentWrapper')[0];
		const sidenav = document.getElementsByClassName('sideNavigations')[0];
			  navbar.classList.toggle('navbarToggle')
			  content.classList.toggle('contentWrapperToggle')
	}
	render(){
		return(
			<Navbar>
				<NavbarBrand onClick={this.toggle}> 
					<FontAwesomeIcon icon='bars' />
				</NavbarBrand>
				<div className='title'>
					<Link to='/'> Code Document </Link>
				</div>
			</Navbar>
		)
	}
}

export default Navigations