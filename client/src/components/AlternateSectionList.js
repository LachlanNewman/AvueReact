import React from 'react';
import LazyLoad from 'react-lazy-load';

import AlternateFlipCard from './AlternateFlipCard';


class AlternateSectionList extends React.Component {

	renderList() {
		const colors = ['grey-dark', 'blue-dark', 'blue-medium']
		return this.props.items.map((item, i) => {
			const color = colors[i % 3];
			return (
				<LazyLoad>
					<AlternateFlipCard item={item} color={color}/>
				</LazyLoad>
			)
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