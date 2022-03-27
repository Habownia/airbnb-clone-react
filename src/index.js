import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import Header from './js/Header';

function MainContent() {
	return (
		<main>
			<h1>Reasons why I'm learning React: </h1>
			<ol>
				<li>Bo jest fajny</li>
				<li>Bo jest fajny</li>
				<li>Bo jest fajny</li>
			</ol>
		</main>
	);
}

function Footer() {
	return (
		<footer>
			<small>2022 Trzycierz development. All rights reserved</small>
		</footer>
	);
}

function Page() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

ReactDOM.render(<Page />, document.getElementById('root'));