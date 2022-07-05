import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Male, Female } from './Avatars';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Female />}></Route>
				<Route path='/male' element={<Male />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
