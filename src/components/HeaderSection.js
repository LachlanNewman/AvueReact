import React from 'react';

const insertLineBreaks = (text) => {
	return text.split('\n').map((item, key) => {
		return <span key={key}>{item}<br/></span>
	});
}

const HeaderSection = ({header}) => {
	return (
		<div className="heading-section">
			<h2>{insertLineBreaks(header.title)}</h2>
			<h3>{insertLineBreaks(header.subTitle)}</h3>
		</div>
	)
};

export default HeaderSection;