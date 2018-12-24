import React from 'react';
import HeaderSection from "./HeaderSection";
import ContactForm from "./ContactForm";

const Contact = ({id,data}) =>{
	return (
		<section id={id}>
			<HeaderSection header={data.header}/>
			<ContactForm/>
		</section>
	)
};

export default Contact;