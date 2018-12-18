import React from 'react';
import Slider from "react-slick";

const Banner = (props) => {

	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<section className="main">
			<div className="main__header">
				<a className="main__site-logo">
					<img src={props.logoSrc} alt=""/>
				</a>
				<div className="main__title">
					<h1>{props.title}</h1>
				</div>
			</div>

			<Slider {...settings} className="main__banner"
				>
				<div>
				{

					props.bannerSrc ?
					<img src={props.bannerSrc} alt="Achieving Business Outcomes"/>:
					null
				}
				</div>
				<div>
					{

						props.bannerSrc ?
							<img src={props.bannerSrc} alt="Achieving Business Outcomes"/>:
							null
					}
				</div>
				<div>
					{

						props.bannerSrc ?
							<img src={props.bannerSrc} alt="Achieving Business Outcomes"/>:
							null
					}
				</div>
			</Slider>
		</section>
	)
};

export default Banner;