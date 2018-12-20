import React from 'react';
import HeaderSection from "./HeaderSection";
import SectionList from "./SectionList";
import Banner from "./Banner";


class WorkPage extends React.Component {

	renderWorkSections = () => {
		return this.props.data.map((section) => {
			return (
				<div>
					<HeaderSection header={section.header}/>
					<SectionList items={section.items}/>
				</div>
			)
		})
	};

	render() {
		return (
			<main id={'main'}>
				<Banner
					title={'Case Studies'}
					logoSrc={'./assets/images/Avue_White_Transparent.png'}
				/>
				{this.renderWorkSections()}
			</main>
		);
	}

};

export default WorkPage;