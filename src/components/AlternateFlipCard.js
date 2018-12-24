import React from 'react';

const AlternateFlipCard =({item,color}) => {
	return (
		<div className={`alt-flip-card alt-flip-card--${color}`}>
			<div className={`alt-flip-card__image`} style={{backgroundImage: `url(${item.img})`}}		>
			</div>
			<div className={`alt-flip-card__inner`}>
				<div className={`alt-flip-card__front`}>
						<h2>{item.title}</h2>
						<p>{item.text}</p>
				</div>
			</div>
		</div>
	)
}

export default AlternateFlipCard;