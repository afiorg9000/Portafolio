import './App.css';
import Gradient from 'rgt';
import GradientButton from 'react-linear-gradient-button';

function App() {
	return (
		<div className='App'>
			<header className='App-header' role='banner'>
				<h1 className='site-title'>
					<Gradient dir='left-to-right' from='#FF4AED' to='#4AFFE9'>
						Virtual Try On
					</Gradient>
				</h1>
				<nav>
					<ul class='nav-links'>
						<li>
							<a href='Home'>Home</a>
						</li>
						<li>
							<a href='HowItWorks'>How It Works</a>
						</li>
						<li>
							<a href='AboutUs'>About Us</a>
						</li>
						<li>
							<a href='WatchDemo'>Watch Demo</a>
						</li>
					</ul>
				</nav>
				<a className='cta' href='Register'>
					<GradientButton theme='Azure Pop' color='#FF4AED' fontSize='18px'>
						Register
					</GradientButton>
				</a>
			</header>
			<body className='App-body'>
			</body>
		</div>
	);
}

export default App;
