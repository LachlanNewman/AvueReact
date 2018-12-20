import React from 'react';

import AlternateFlipCard from './AlternateFlipCard';

class AlternateSectionList extends React.Component {

	renderList() {
		const colors = ['grey-dark','blue-dark','blue-medium']
		console.log(colors)
		return this.props.items.map((item,i) => {
			const color = colors[i % 3];
			return <AlternateFlipCard item={item} color={color}/>
		})
	}

	render() {
		return (
			<div className={`alt-flip-card__list`}>
				{this.renderList()}
			</div>
		);
	}
}

export default AlternateSectionList;