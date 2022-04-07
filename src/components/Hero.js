import React from 'react';

import herophoto from '../img/photo.png';

export default function Hero() {
	return (
		<div className='hero'>
			<img src={herophoto} alt='' />
			<div className='hero--content'>
				<h1>Online Experiences</h1>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</div>
	);
}
