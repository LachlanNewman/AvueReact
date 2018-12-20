import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

class Banner extends React.Component {


	render() {

		const options = {
				autoplay: true,
				showArrows: false,
				showIndicators: false,
				showThumbs: false,
				showStatus: false
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
					<div>
						{

							this.props.bannerSrc ?
								<img src={this.props.bannerSrc}
								     alt="Achieving Business Outcomes"/> :
								null
						}
					</div>
					<div>
						{

							this.props.bannerSrc ?
								<img src={this.props.bannerSrc}
								     alt="Achieving Business Outcomes"/> :
								null
						}
					</div>
					<div>
						{

							this.props.bannerSrc ?
								<img src={this.props.bannerSrc}
								     alt="Achieving Business Outcomes"/> :
								null
						}
					</div>
				</Carousel>
			</section>
		)
	}
};

export default Banner;