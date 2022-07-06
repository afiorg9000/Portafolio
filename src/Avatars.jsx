import React from 'react';
import { Header } from './components/header';
import { Home } from './components/home';
import { SliderBox } from './components/sliderBox';
import { MaleScene, FemaleScene, AndrewScene, SofiaScene } from './components/scene';
import { HowItWorks } from './components/howitworks';
import { AboutUs } from './components/aboutus';

function Male() {
	return (
		{/* contains all the male avatar components */}

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
		{/* contains all the female avatar components */}

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
		{/* contains all of Andrews components */}

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
		{/* contains all of Sofias components */}

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
