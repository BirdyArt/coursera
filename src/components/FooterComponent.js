import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props) {
	return(
		<div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <FontAwesomeIcon icon={['fas', 'phone']} size="lg" />: +852 1234 5678<br />
		              <FontAwesomeIcon icon={['fas', 'fax']} size="lg" />: +852 8765 4321<br />
		              <FontAwesomeIcon icon={['fas', 'envelope']} size="lg" /> <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn" href="http://google.com/+"><FontAwesomeIcon icon={['fab', 'google-plus']} size="2x" /></a>
                        <a className="btn" href="http://www.facebook.com/profile.php?id="><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></a>
                        <a className="btn" href="http://www.linkedin.com/in/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></a>
                        <a className="btn" href="http://twitter.com/"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></a>
                        <a className="btn" href="http://youtube.com/"><FontAwesomeIcon icon={['fab', 'youtube']} size="2x" /></a>
                        <a className="btn" href="mailto:"><FontAwesomeIcon icon={['far', 'envelope']} size="2x" /></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
	);
}

export default Footer;