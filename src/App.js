import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Router>
          		<Routes>
            		<Route path="/" element={<HomeScreen />}/>
          		</Routes>
      		</Router>
		</div>
	);
}

export default App;
