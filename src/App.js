import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginPage from './screens/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import SiginPage from './screens/SiginPage';
import ProtectedRoute from './screens/ProtectedRoute';

function App() {
	return (
		<div className="app">
			{/* {!user ? 
			(<LoginPage />) 
			: 
				(<Routes>
					<Route path="/" element={<HomeScreen />}/>
				</Routes>)
			} */}
		<AuthContextProvider>
			<Routes>
				<Route exact path="/" element={<LoginPage  check="1" fix="false"/>}/>
				<Route exact path="/home" element={<HomeScreen />}/>
				<Route exact path="/login" element={<LoginPage check="1" fix="true"/>}/>
				<Route exact path="/signup" element={<LoginPage check="x" fix="true"/>}/>
				<Route path="/homePage" 
				element={
				<ProtectedRoute>
					<HomeScreen />
				</ProtectedRoute>}/>
			</Routes>
		</AuthContextProvider>	
		</div>
	);
}

export default App;
