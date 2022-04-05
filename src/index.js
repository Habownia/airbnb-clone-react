import React from 'react';
import ReactDOM from 'react-dom';
//css
import './index.css';
//components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Workers from './components/Workers';

function App() {
	return (
		<div>
			<Header />
			<MainContent />
			<Workers />
			<Footer />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));