import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			isNavOpen: false
		}
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render() {
		return(
			<>
				<Navbar dark expand="md">
			        <div className="container">
			        	<NavbarToggler onClick={this.toggleNav} />
			          	<NavbarBrand className="mr-auto" href="/">
			          		<img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
			          	</NavbarBrand>
			          	<Collapse isOpen={this.state.isNavOpen} navbar>
				          	<Nav navbar>
					          	<NavItem>
					          		<NavLink className="nav-link" to="/home">
					          			<FontAwesomeIcon icon={['fas', 'home']} size="lg" /> Home
					          		</NavLink>
					          	</NavItem>
					          	<NavItem>
					          		<NavLink className="nav-link" to="/aboutus">
					          			<FontAwesomeIcon icon={['fas', 'info']} size="lg" /> About Us
					          		</NavLink>
					          	</NavItem>
					          	<NavItem>
					          		<NavLink className="nav-link" to="/menu">
					          			<FontAwesomeIcon icon={['fas', 'list']} size="lg" /> Menu
					          		</NavLink>
					          	</NavItem>
					          	<NavItem>
					          		<NavLink className="nav-link" to="/contactus">
					          			<FontAwesomeIcon icon={['fas', 'address-card']} size="lg" /> Contact Us
					          		</NavLink>
					          	</NavItem>
				          	</Nav>
			          	</Collapse>
			        </div>
	      		</Navbar>
	      		<Jumbotron>
	      			<div className="container">
	      				<div className="row row-header">
	      					<div className="col-12 col-sm-6">
	      						<h1>Ristorante Con Fusion</h1>
	      						<p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
	      					</div>
	      				</div>
	      			</div>
	      		</Jumbotron>	
			</>
		);
	}
}

export default Header;