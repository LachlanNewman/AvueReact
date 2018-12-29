import React from 'react';
import LazyLoad from 'react-lazy-load';

//components
import FlipCard from './FlipCard'

class SectionList extends React.Component {

	renderList() {

		return this.props.items.map((item, i) => {
			const side = (i % 2 === 0) ? 'right' : 'left';
			return (
				<div key={i}>
					<FlipCard item={item} side={side} hideTextTile={this.props.hideTextTile} noFlip={this.props.noFlip}/>
				</div>
			)
		})
	}

	render() {
		return (
			<div className={`section-list ${this.props.hideTextTile? 'flex':''}`}>
				{this.renderList()}
			</div>
		);
	}

}

export default SectionList;