import './styles/header.css';
import Gradient from 'rgt';

{/*This is the Header function that contains all nav bar and header contents*/}

function Header() {
	return (
		<>
			<header className='App-header' role='banner'>
				<h1 className='site-title'>
					<Gradient dir='left-to-right' from='#FF4AED' to='#4AFFE9'>
						CREATE
					</Gradient>
				</h1>
				<div className="logo" />
				<nav>
					<ul class='nav-links'>
						<li active>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='#AboutUs'>About Us</a>
						</li>
						<li>
							<a href='#HowItWorks'>How It Works</a>
						</li>
						<li>
							<a href='#Demo'>Demo</a>
						</li>
					</ul>
				</nav>
				<a href='#Register'>
					<button class="Beta">Be part of our Beta App</button>
				</a>
			</header>
		</>
	);
}

export { Header };
