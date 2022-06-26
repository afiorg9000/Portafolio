import './App.css';
import React from 'react';
import { Header } from './components/header';
import { SliderBox } from './components/sliderBox';
import { Scene } from './components/scene';
import { Uploads } from './components/starterBox';

function App() {
	return (
		<>
			<Header />
			<SliderBox />
			<Scene />
			<Uploads />
		</>
	);
}

export default App;
