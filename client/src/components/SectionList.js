import React from 'react';

//components
import FlipCard from './FlipCard'

class SectionList extends React.Component{

	renderList(){
		return this.props.items.map((item,i)=> {
			const side = (i % 2 == 0)? 'right' : 'left';
			return <FlipCard item={item} side={side}/>
		})
	}

	render() {
		return (
			<div>
				{this.renderList()}
			</div>
		);
	}

}

export default SectionList;