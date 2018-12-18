import React from 'react';
import {BrowserRouter ,Route} from "react-router-dom";


//components
import Banner from './Banner'
import Section from './Section'
import NavMenu from './NavMenu'
import Contact from "./Contact";
import WorkPage from "./WorkPage";
import Footer from './Footer'

//data
import {about, service, solutions,contact,work} from '../js/data'

const Work = () => {
	return <WorkPage data={work}/>
}

const Home = () => {
	return (
		<main id={'main'}>
			<Banner
				title={'Achieving Business Outcomes'}
				logoSrc={'./assets/images/Avue_White_Transparent.png'}
				bannerSrc={'assets/images/Banner-resize.jpg'}
			/>
			<Section id={'about'} data={about}/>
			<Section id={'solutions'} data={solutions}/>
			<Section id={'services'} data={service}/>
			<Contact id={'contact'} data={contact}/>
		</main>
	)
}

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<NavMenu/>
				<Route exact path="/" component={Home}/>
				<Route path="/work" component={Work}/>
				<Footer/>
			</div>
		</BrowserRouter>
	)

}

export default App;