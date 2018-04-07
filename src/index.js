import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home'
import {createStore } from 'redux'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import rootReducer from './Reducers'

const store = createStore(rootReducer)
render (
	<Provider store= {store}>
	<App />
	</Provider>
,document.getElementById('root'))
