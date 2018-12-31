import React from 'react';
import sgMail from '@sendgrid/mail'

import Modal from './Modal';

class ContactForm extends React.Component {

	state = {
		name: '',
		email: '',
		content: ''
	};

	handleName = (e) => {
		this.setState({name: e.target.value})
	};

	handleEmail = (e) => {
		this.setState({email: e.target.value})
	};

	handleContent = (e) => {
		this.setState({content: e.target.value})
	};

	sendEmail = (e) => {
		e.preventDefault();

		sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API);

		const msg = {
			to: 'contactus@avue.com.au',
			from: `${this.state.name} <${this.state.email}>`,
			subject: 'AVUE CONTACT SUBMISSION',
			text: this.state.content,
			html: this.state.content,
		};

		sgMail.send(msg);

		this.setState({
			name: '',
			email: '',
			content: '',
		})

	};

	render() {

		return (
			<div className={`contact-form`}>
				<h2>Contact Us </h2>
				<form onSubmit={(e) => this.sendEmail(e)}>
					<div className={`contact-form__row`}>
						<input
							type={'text'}
							placeholder={'Name'}
							value={this.state.name}
							onChange={(e) => this.handleName(e)}/>
						<input
							type={'email'}
							placeholder={'Email'}
							value={this.state.email}
							onChange={(e) => this.handleEmail(e)}/>
					</div>
					<div className={`contact-form__row`}>
						<textarea
							onChange={(e) => this.handleContent(e)}
							placeholder={'Message'}
							value={this.state.content}/>
					</div>
					<div className={`contact-form__row`}>
						<button id={'contact-form-button'}>Submit</button>
					</div>
				</form>
				<Modal
					text={'Thankyou for Contacting Us'}
				/>
			</div>
		);
	}


}

export default ContactForm;