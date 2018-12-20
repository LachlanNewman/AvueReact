import React from 'react';

import {insertLineBreaks} from "../js/helperFunctions";

const HeaderSection = ({header}) => {
	return (
		<div className="heading-section">
			<h2>{header.title}</h2>
			<h3>{header.subTitle}</h3>
		</div>
	)
};

export default HeaderSection;