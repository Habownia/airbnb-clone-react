import React from 'react';

import Card from '../card/Card';

import katieZaferes from './img/katie-zaferes.png';
import wedding from './img/wedding.png';
import bike from './img/bike.png';

export default function Cards() {
	return (
		<div>
			<div className='cards-cont'>
				<Card
					img={katieZaferes}
					rate='5.0'
					num={6}
					country='USA'
					presc='Life lessons with Katie Zaferes'
					price={136}
				/>

				<Card
					img={wedding}
					rate='5.0'
					num={30}
					country='USA'
					presc='Learn wedding photography                    '
					price={125}
				/>

				<Card
					img={bike}
					rate='5.0'
					num={2}
					country='USA'
					presc='Group Mountain Biking'
					price={50}
				/>
			</div>
		</div>
	);
}
