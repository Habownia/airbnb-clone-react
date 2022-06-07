import React from 'react';

import Card from '../card/Card';
import data from '../data';

export default function Cards() {
	const cards = data.map((item) => {
		return (
			<Card
				key={item.id}
				{...item}
				// item = {item}
				// działa to jak np. price = item.price
				// zamiast item = {item} i zamieniania wszystkiego w kodzie
			/>
		);
	});

	return (
		<div>
			<div className='cards-cont'>{cards}</div>
		</div>
	);
}
