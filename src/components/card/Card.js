import React from 'react';

import './card.css';

import star from './img/star.png';

// export default function Card({img, rate, num, country, presc, price}) {

export default function Card(props) {
	return (
		<div className='card'>
			<div className='card--photo'>
				<img src={props.img} alt='Katie Zaferes' />
			</div>
			<div className='card--info'>
				<div className='card--rating'>
					<img src={star} alt='star' className='card--star' />
					<span>{props.rate}</span>
					<span className='gray'>({props.num}) · </span>
					<span className='gray'>{props.country}</span>
				</div>
				{props.presc && <p>{props.presc}</p>}
				{/* Jeśli nie ma podanego props'a to nie wyświetla on  */}
				<p>
					<b>From ${props.price}</b> / person
				</p>
			</div>
		</div>
	);
}
