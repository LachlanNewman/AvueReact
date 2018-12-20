import React from 'react';
import axios from 'axios';
import sgMail  from '@sendgrid/mail'
class ContactForm extends React.Component {


	state = {
		name: null,
		email: null,
		content: null
	};

	handleName = (e) => {
		this.setState({name: e.target.value})
	}

	handleEmail = (e) => {
		this.setState({email: e.target.value})
	}

	handleContent = (e) => {
		this.setState({content: e.target.value})
	}

	sendEmail = (e) => {
		e.preventDefault();
		console.log(process.env.REACT_APP_SENDGRID_API);
		sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API);
		const msg = {
			to: 'lachnewman007@gmail.com',
			from: `${this.state.name} <${this.state.email}>`,
			subject: 'AVUE CONTACT SUBMISSION',
			text: this.state.content,
			html: this.state.content,
		};
		sgMail.send(msg);
		this.setState({
			name: null,
			email: null,
			content: null
		})
	}

	render() {
		return (
			<div className={`contact-form`}>
				<h2>Contact Us </h2>
				<form onSubmit={(e)=>this.sendEmail(e)}>
					<div className={`contact-form__row`}>
						<input
							type={'text'}
							placeholder={'Name'}
							value={this.state.name}
							onChange={(e)=>this.handleName(e)}/>
						<input
							type={'email'}
							placeholder={'Email'}
							value={this.state.email}
							onChange={(e)=>this.handleEmail(e)}/>
					</div>
					<div className={`contact-form__row`}>
						<textarea
							onChange={(e)=> this.handleContent(e)}
							placeholder={'Message'}
							value={this.state.content}/>
					</div>
					<div className={`contact-form__row`}>
						<button id={'contact-form-button'}>Submit</button>
					</div>
				</form>
			</div>
		);
	}


}

export default ContactForm;