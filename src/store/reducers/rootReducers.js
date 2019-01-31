import countryStateReducers from './countryStateReducers'
import reduxCrudReducer from './reduxCrudReducer'
import firebaseCrudReducer from './firebaseCrudReducer'
import geoReducer from './geoReducer'
//Sample Project Reducer
	//Sihr
	import sihrAuthReducer from './sihrAuthReducer'
	import sihrEmployeeReducer from './sihrEmployeeReducer'
	import sihrKanbanReducer from './sihrKanbanReducer'

import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore' 
import { combineReducers } from 'redux'


const rootReducers = combineReducers({
	countries: countryStateReducers,
	reduxCrud: reduxCrudReducer,
	firebaseCrud: firebaseCrudReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	sihrAuth: sihrAuthReducer,
	sihrEmployee: sihrEmployeeReducer,
	sihrKanban: sihrKanbanReducer
})

export default rootReducers