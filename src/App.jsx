import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Male, Female, Andrew, Sofia } from './Avatars';

/* These are the routes to the male and female renderer */

function App() {
	return (

		<Router>
			<Routes>
				<Route path='/' element={<Female />}></Route>
				<Route path='/male' element={<Male />}></Route>
				<Route path='/Andrew' element={<Andrew />}></Route>
				<Route path='/Sofia' element={<Sofia />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
