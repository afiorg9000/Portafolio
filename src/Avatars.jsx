import React from 'react';
import { Header } from './components/header';
import { Home } from './components/home';
import { SliderBox } from './components/sliderBox';
import { MaleScene, FemaleScene, AndrewScene, SofiaScene } from './components/scene';
import { HowItWorks } from './components/howitworks';
import { AboutUs } from './components/aboutus';

function Male() {
	return (
		<>
			<Header />
			<Home />
			<SliderBox />
			<MaleScene />
			<HowItWorks />
			<AboutUs />
		</>
	);
}

function Female() {
	return (
		<>
			<Header />
			<Home />
			<SliderBox />
			<FemaleScene />
			<HowItWorks />
			<AboutUs />
		</>
	);
}

function Andrew() {
	return (
		<>
			<Header />
			<Home />
			<SliderBox />
			<AndrewScene />
			<HowItWorks />
			<AboutUs />
		</>
	);
}

function Sofia() {
	return (
		<>
			<Header />
			<Home />
			<SliderBox />
			<SofiaScene />
			<HowItWorks />
			<AboutUs />
		</>
	);
}

export { Male, Female, Andrew, Sofia };
