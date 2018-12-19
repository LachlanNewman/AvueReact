import React from 'react';
import NodeMailer from 'nodemailer'
class ContactForm extends React.Component {


	componentDidMount() {
		this.transporter = NodeMailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			auth: {
				user: 'wm525r3rhcnj4dl3@ethereal.email',
				pass: 'tFCBbSmHZYcCtpN73Q'
			}
		});

		this.mailOptions = {
			from: '"Fred Foo 👻" <foo@example.com>', // sender address
			to: 'bar@example.com, baz@example.com', // list of receivers
			subject: 'Hello ✔', // Subject line
			text: 'Hello world?', // plain text body
			html: '<b>Hello world?</b>' // html body
		};
	}


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

	sendEmail = () => {
		this.transporter.sendMail(this.mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', NodeMailer.getTestMessageUrl(info));

			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		});
	}

	render() {
		return (
			<div className={`contact-form`}>
				<h2>Contact Us </h2>
				<form onSubmit={()=>this.sendEmail}>
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