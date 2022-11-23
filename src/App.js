import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginPage from './screens/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import SiginPage from './screens/SiginPage';
import ProtectedRoute, { ProtectedSignUp, ProtectedLoginScreen } from './screens/ProtectedRoute';
import Account from './screens/Account';

function App() {
	return (
		<div className="app">
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<HomeScreen />}/>
				<Route path="/subscribe" element={<ProtectedLoginScreen><LoginPage  check="1" fix="false"/></ProtectedLoginScreen>}/>
				<Route exact path="/login" element={<ProtectedSignUp><LoginPage check="1" fix="true"/></ProtectedSignUp>}/>
				<Route exact path="/signup" element={<ProtectedSignUp><LoginPage check="x" fix="true"/></ProtectedSignUp>}/>
				<Route path="/homePage" 
				element={
				<ProtectedRoute>
					<HomeScreen />
				</ProtectedRoute>}/>
				<Route path="/account"
				element=
					{
					<ProtectedRoute>
						<Account />
					</ProtectedRoute>}/>
			</Routes>
		</AuthContextProvider>	
		</div>
	);
}

export default App;
