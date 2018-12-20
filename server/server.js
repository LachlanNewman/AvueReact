const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	auth: {
		user: 'alppu2cn4o62ogte@ethereal.email',
		pass: '7Xv7BzZBBYPFyB1wxF'
	},
	tls: {
		rejectUnauthorized: false
	}
});

app.use(bodyparser.json());
/* Parse json in request */
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

/* Priority serve any static files */
app.use(express.static(path.resolve(__dirname, "../client/build")));

// respond with "hello world" when a GET request is made to the homepage

app.post("/api/send_mail", function (req, res) {
	res.set("Content-Type", "application/json");


// send mail with defined transport object
	const name = req.body.name;
	const email = req.body.email;
	const body = req.body.message;

	// setup email data with unicode symbols
	let mailOptions = {
		from: `"${name}" <foo@example.com>`, // sender address
		to: 'info@avue.com', // list of receivers
		subject: 'AVUE TEST EMAIL', // Subject line
		text: `${body}`, // plain text body
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log('custom' + error);
		}
		console.log('Message sent: %s', info.messageId);
		// Preview only available when sending through an Ethereal account
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
		// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
	})
});



app.get("*", function (request, response) {
	response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));