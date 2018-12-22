import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import LazyLoad from 'react-lazy-load';

class Banner extends React.Component {

	renderBannerImgs = () => {
		return this.props.bannerSrc.map(img => {
			return (
				<LazyLoad>
					<img src={img}/>
				</LazyLoad>
			)
		})
	}


	render() {

		const options = {
				autoPlay: true,
				showArrows: false,
				showIndicators: false,
				showThumbs: false,
				showStatus: false,
				interval: 2000
			}
		;

		return (
			<section className="main">
				<div className="main__header">
					<a className="main__site-logo">
						<img src={this.props.logoSrc} alt=""/>
					</a>
					<div className="main__title">
						<h1>{this.props.title}</h1>
					</div>
				</div>

				<Carousel {...options}>
					{this.renderBannerImgs()}
				</Carousel>
			</section>
		)
	}
};

export default Banner;