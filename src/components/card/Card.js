import React from 'react';

import './card.css';

import star from './img/star.png';

// export default function Card({img, rate, num, country, presc, price}) {

export default function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.location == 'Online') {
		badgeText = 'ONLINE';
	}
	return (
		<div className='card'>
			<div className='card--photo'>
				{badgeText && <div className='card--badge'>{badgeText}</div>}
				<img
					src={process.env.PUBLIC_URL + '/images/' + props.coverImg}
					alt={props.title}
				/>
			</div>
			<div className='card--info'>
				<div className='card--rating'>
					<img src={star} alt='star' className='card--star' />
					<span>{props.stats.rating}</span>
					<span className='gray'>({props.stats.reviewCount}) · </span>
					<span className='gray'>{props.location}</span>
				</div>
				{props.title && <p>{props.title}</p>}
				{/* Jeśli nie ma podanego props'a to go nie wyświetla */}
				<p>
					<b>From ${props.price}</b> / person
				</p>
			</div>
		</div>
	);
}
