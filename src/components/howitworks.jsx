import "./styles/howitworks.css";
import Gradient from 'rgt';

{/*This is the how it works function that contains all the code for the how it works page*/}

function HowItWorks() {
	return (
		<>
			<h1 id="HowItWorks" class="OurFeatures-Title">
				Our
			</h1>
			<h1 class="Features">
				<Gradient dir='left-to-right' from='#FF4AED' to='#4AFFE9'>
					Features
				</Gradient>
			</h1>
			<h3 class="Body-Visualizer-Title">Body Visualizer</h3>
			<text class="Body-Visualizer-Text">Body Visualizer combines your height, current weight, chest, waist, hips, inseam,
				and the amount of exercise you do to display a virtual body model of yourself.</text>
			<button id="#Demo" class="Explore">
				Explore
			</button>
			<div id="Register" class="QRCode" />
		</>
	);
};

export { HowItWorks };
