import React from 'react';

const AlternateFlipCard =({item,color}) => {
	return (
		<div className={`alt-flip-card alt-flip-card--${color}`}>
			<div className={`alt-flip-card__image flip-card__image`} style={{backgroundImage: `url(${item.img})`}}		>
			</div>
			<div className={`alt-flip-card__inner flip-card__inner`}>
				<div className={`alt-flip-card__front`} style={{backgroundImage : `url(${item.img})`}}>
					<div className={`alt-flip-card__overlay flip-card__overlay`} >
						<h2>{item.title}</h2>
						<h4>{item.subTitle}</h4>
					</div>
				</div>
				<div className={`alt-flip-card__back`}>
					<p>{item.text}</p>
				</div>
			</div>
		</div>
	)
}

export default AlternateFlipCard;