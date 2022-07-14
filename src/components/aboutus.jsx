import "./styles/aboutus.css";
import Gradient from 'rgt';
import React from "react";

/*This is the About Us function that contais all the contents of the about us page*/

function AboutUs() {
	return (
		<>
			<h1 id="AboutUs" class="About-Title">
				About
			</h1>
			<h1 class="iCreate">
				<Gradient dir='left-to-right' from='#FF4AED' to='#4AFFE9'>
					iCreate
				</Gradient>
			</h1>
			<text class="AboutUs-description"> iCreate is a platform to create a digital replica of yourself. It sounds crazy, because it is.
				It's basically a copy of yourself that you can create to represent yourself on ENCLOTHED,
				where you can use your human to try new looks, new clothes and new hairstyles for that matter.
			</text>
			<div class="SofiaBox">
				<text class="SofiaName">Sofia Mendez</text>
				<div class="S-GraphicDesignTag" />
				<div class="S-ModelIntTag" />
				<div class="S-TransferFaceTag" />
				<div class="S-ReactLogo" />
				<div class="S-JSLogo" />
				<div class="S-FigmaLogo" />
				<div class="S-BlenderLogo" />
				<div class="S-ThreeJSLogo" />
				<div class="SofiaFace" />
				<a href="https://www.linkedin.com/in/sofia-m%C3%A9ndez-a826671a2/">
					<div class="S-LinkedInLogo" />
				</a>
				<a href="https://github.com/afiorg9000">
					<div class="S-GithubLogo" />
				</a>
				<a href="https://twitter.com/SofiaIs94144011">
					<div class="S-TwitterLogo" />
				</a>
			</div>
			<div class="AndrewBox">
				<text class="AndrewName">Andrew Gonzalez</text>
				<div class="A-FrontEndDevTag" />
				<div class="A-ModelIntTag" />
				<div class="A-TransferFaceTag" />
				<div class="A-ReactLogo" />
				<div class="A-JSLogo" />
				<div class="A-HTML5Logo" />
				<div class="A-CSSLogo" />
				<div class="A-PythonLogo" />
				<div class="AndrewFace" />
				<a href="https://www.linkedin.com/in/andrew-gonz%C3%A1lez-13b303215/">
					<div class="A-LinkedInLogo" />
				</a>
				<a href="https://github.com/Drew-24">
					<div class="A-GithubLogo" />
				</a>
				<a href="https://twitter.com/eldrew24">
					<div class="A-TwitterLogo" />
				</a>
			</div>
		</>
	);
};

export { AboutUs };
