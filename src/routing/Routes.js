import React from 'react'
//Layout
	import Navigations from './../component/layout/Navigations'
	import SideNavigations from './../component/layout/SideNavigations'
	import Footer from './../component/layout/Footer'
//Component
	import Dashboard from './../component/content/main-component/'
	import FormSignUpMultiStep from './../component/content/authentication/Multistep'
	import FirebaseCrud from './../component/content/crud/firebase-crud'
	import ReduxCrud from './../component/content/crud/redux-crud'
	import Unsplash from './../component/content/fetching-data/Unsplash/'
	import OpenWeatherMap from './../component/content/fetching-data/OpenWeatherMap/'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faAngleRight)

class Routes extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div id="Routes">
					<Navigations />
					<SideNavigations />
					<div className='contentWrapper'>
						<div className='content'>
							<Switch>
								<Route path='/' component={Dashboard} exact />
								<Route path='/auth' component={FormSignUpMultiStep} />
								<Route path='/firebasecrud' component={FirebaseCrud} />
								<Route path='/reduxcrud' component={ReduxCrud} />
								<Route path='/unsplash' component={Unsplash} />
								<Route path='/openweathermap' component={OpenWeatherMap} />
							</Switch>
						</div>
						<Footer />
					</div>

				</div>
			</BrowserRouter>
		)
	}
}

export default Routes