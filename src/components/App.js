import React from 'react';
import '../index.css';
//components
import Nav from './Nav';
import Hero from './Hero';
import Cards from './cards/Cards';

export default function App() {
	return (
		<div>
			<Nav />
			<Hero />
            <Cards />
		</div>
	);
}
