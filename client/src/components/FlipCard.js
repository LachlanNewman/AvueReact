import React from 'react';
import LazyLoad from 'react-lazy-load';

const FlipCard = ({item,side}) => {
	console.log(item);
	return (
		<div className={`flip-card flip-card--${side}`}>
			<div className={`flip-card__image`} style={{backgroundImage: `url(${item.img})`}}		>
			</div>
			<div className={`flip-card__inner`}>
				<div className={`flip-card__front`} style={{backgroundImage : `url(${item.img})`}}>
					<div className={`flip-card__overlay`} >
						<h2>{item.title}</h2>
						<h4>{item.subTitle}</h4>
					</div>
				</div>
				<div className={`flip-card__back`}>
					<p>{item.text}</p>
				</div>
			</div>
		</div>
	)
};

export default FlipCard;