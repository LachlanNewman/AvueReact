import React from 'react';

class ContactForm extends React.Component {

	state = {
		name: null,
		email: null,
		content: null
	};

	handleName = () => {

	}

	handleEmail = () => {

	}

	handleContent = (e) => {
		this.setState({content: e.target.value})
	}

	render() {
		return (
			<div className={`contact-form`}>
				<h2>Contact Us </h2>
				<form>
					<div className={`contact-form__row`}>
						<input
							type={'text'}
							placeholder={'Name'}
							value={this.state.name}/>
						<input
							type={'email'}
							placeholder={'Email'}
							value={this.state.email}/>
					</div>
					<div className={`contact-form__row`}>
						<textarea
							onChange={(e)=> this.handleContent(e)}
							placeholder={'Message'}
							value={this.state.content}/>
					</div>
					<div className={`contact-form__row`}>
						<button>Submit</button>
					</div>
				</form>
			</div>
		);
	}


}

export default ContactForm;