import "./styles/home.css";

{/*This is the Home function that contains all the contents of the principal home page*/}

function Home() {
	return (
		<>
			<h1 id="/" class="Home-Title">
				Design Your Own Customized<br />
				Digital Human
			</h1>
			<text class="Home-Description">A web based avatar platform that uses a 3D human body visualizer to create virtual human replicas.</text>
			<div>
				<a href="#Demo">
					<button class="Create-Avatar">
						Create Avatar
					</button>
				</a>
			</div>
		</>
	);
};

export { Home };
