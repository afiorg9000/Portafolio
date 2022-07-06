import React from 'react';
import { Header } from './components/header';
import { Home } from './components/home';
import { SliderBox } from './components/sliderBox';
import { MaleScene, FemaleScene, AndrewScene, SofiaScene } from './components/scene';
import { HowItWorks } from './components/howitworks';
import { AboutUs } from './components/aboutus';

function Male() {
	/* contains all the male avatar components */
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
	/* contains all the female avatar components */
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
	/* contains all of Andrews components */
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
	/* contains all of Sofias components */
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
