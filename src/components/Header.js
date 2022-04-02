import React from 'react';
import reactLogo from '../img/react-logo.png';

export default function Header() {
	return (
		<header>
			<nav>
				<div className='logo-all'>
					<img src= {reactLogo} className="logo" />
					<p className='logo-text'>React Facts</p>
				</div>
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}
