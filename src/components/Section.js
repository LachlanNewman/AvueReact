import React from 'react';

//components
import HeaderSection from './HeaderSection'
import SectionList from './SectionList'
import AlternateSectionList from "./AlternateSectionList";

const Section = ({id, data,hideTextTile}) => {

	if (id === 'solutions') {
		return (
			<section id={id}>
				<HeaderSection header={data.header}/>
				<AlternateSectionList items={data.items} hideTextTile={hideTextTile}/>
			</section>
		);
	}
	else {
		return (
			<section id={id}>
				<HeaderSection header={data.header}/>
				<SectionList items={data.items} hideTextTile={hideTextTile}/>
			</section>
		);
	}
};

export default Section;