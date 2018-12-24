import React from 'react';

//components
import Banner from './Banner'
import Section from './Section'
import NavMenu from './NavMenu'
import Contact from "./Contact";
import Footer from './Footer'

//data
import {contact} from '../js/data'
import about from '../js/about'
import solutions from '../js/solutions'
import service from '../js/service'
import {BSTwork, BPGwork, ADwork, TUTwork, SCwork} from '../js/work'


const bannerImgs = [
	'assets/images/Banner/Banner_Melbourne-3_5957389_l-2015-resize.jpg',
	'assets/images/Banner/Banner_Newcastle_229094038_l-2015-resize.jpg',
	'assets/images/Banner/Banner_Sydney_10065141_l-2015-resize.jpg',
]


const App = () => {
	return (
		<div>
			<NavMenu/>
			<main id={'main'}>
				<Banner
					title={'Achieving Business Outcomes'}
					logoSrc={'./assets/images/Avue_White_Transparent.png'}
					bannerSrc={bannerImgs}
				/>
				<Section id={'about'} data={about}/>
				<Section id={'solutions'} data={solutions}/>
				<Section id={'services'} data={service}/>
				<Section id={'work'} data={BSTwork} hideTextTile={true}/>
				<Section data={BPGwork} hideTextTile={true}/>
				<Section data={ADwork} hideTextTile={true}/>
				<Section data={TUTwork} hideTextTile={true}/>
				<Section data={SCwork} hideTextTile={true}/>
				<Contact id={'contact'} data={contact}/>
				{/*<Footer/>*/}
			</main>
		</div>
	)

}

export default App;