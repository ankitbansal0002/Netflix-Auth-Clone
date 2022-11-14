import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import HomeScreen from './screens/HomeScreen';
import LoginPage from './screens/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

	const user = null;
	// const user = {
	// 	name: "Ankit"
	// }

	return (
		<div className="app">
			<Router>
			{!user ? 
			(<LoginPage />) 
			: 
				(<Routes>
					<Route path="/" element={<HomeScreen />}/>
				</Routes>)
			}
			</Router>
		</div>
	);
}

export default App;
