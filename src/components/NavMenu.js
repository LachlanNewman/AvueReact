import React from 'react';
// import {Link} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link';

class NavMenu extends React.Component {

	state = {
		menuHeight: 0,
		showMenu: false
	};


	componentDidMount() {
		window.addEventListener("resize", this.checkScreenSize);
	};


	scrollWithOffset = (el) => {

		let offset = 60;

		if(this.state.showMenu === true) {
			offset = 160;
		}

		const elementPosition = el.offsetTop - offset;

		window.scroll({
			top: elementPosition,
			left: 0,
			behavior: "smooth"
		});

		this.setState({showMenu: false})
	};

	checkScreenSize = () => {
		const windowWidth = window.innerWidth;
		if(windowWidth > 768){
			this.setState({showMenu: false});
		}
	};

	showMenu = () => {
			this.setState({showMenu: !this.state.showMenu})
	};


	render() {

		const showMenu = this.state.showMenu ? 'show-menu': '';

		return (
			<header className={`nav-menu ${showMenu}`}>
				<div className={`nav-menu__container`}>
					<div id="toggle" className="nav-menu__toggle" onClick={() => this.showMenu()}>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className={`nav-menu__menu ${showMenu}`}>
						<Link exact
						      className={'nav-menu__link'}
						      to={'/#main'}
						      scroll={el => this.scrollWithOffset(el)}>Home</Link>
						<Link className={'nav-menu__link'}
						      to={'/#about'}
						      scroll={el => this.scrollWithOffset(el)}>Our Approach</Link>
						<Link className={'nav-menu__link'}
						      to={'/#solutions'}
						      scroll={el => this.scrollWithOffset(el)}>Solutions</Link>
						<Link className={'nav-menu__link'}
						      to={'/#services'}
						      scroll={el => this.scrollWithOffset(el)}>Services</Link>
						<Link className={'nav-menu__link'}
						      to={'/work#main'}
						      scroll={el => this.scrollWithOffset(el)}>Our Work</Link>
						<Link className={'nav-menu__link'}
						      to={'/#contact'}
						      scroll={el => this.scrollWithOffset(el)}>Contact Us</Link>
					</div>
				</div>
			</header>
		)
	};
}

export default NavMenu;