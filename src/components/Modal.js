import React from 'react';

const Modal = ({ text}) => {
	return (
		<div id={`modal`} className={`modal hide`}>
			<div className={`modal__container`}>
				<div>{text}</div>
			</div>
		</div>
	)
}

export default Modal;