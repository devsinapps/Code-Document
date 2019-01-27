import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routing/Routes'
import './style/minify/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import firebaseConfig from './config/firebaseConfig'
import rootReducers from './store/reducers/rootReducers'

const store = createStore(rootReducers,
		compose(
			applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
			reduxFirestore(firebaseConfig),
			reactReduxFirebase(firebaseConfig)
		)
	)

ReactDOM.render(
	<Provider store={store}>
	<Routes />
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
