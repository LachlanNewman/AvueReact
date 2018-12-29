import React from 'react';

const FlipCard = ({item, side, hideTextTile,noFlip}) => {

	const flipCardImg = (
		<div className={`flip-card__image`} style={{backgroundImage: `url(${item.img})`}}>
		</div>
	)

	return (
		<div className={`flip-card flip-card--${side} ${hideTextTile ? 'flip-card--hide-img' : ''}`}>
			{
				hideTextTile ? '' : flipCardImg
			}
			<div className={`flip-card__content`}>
				<div className={`flip-card__inner ${noFlip ? 'no-flip': ''}`}>
					<div className={`flip-card__front ${hideTextTile ? 'show-image' : ''}`}
					     style={{backgroundImage: `url(${item.img})`}}>
						<div className={`flip-card__overlay`}>
							<h2>{item.title}</h2>
							<h4>{item.subTitle}</h4>
						</div>
					</div>
					<div className={`flip-card__back`}>
						<h2>{item.title}</h2>
						<p>{item.text}</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default FlipCard;