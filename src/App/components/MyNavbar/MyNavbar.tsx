import React, { FunctionComponent, useState } from 'react';
import './MyNavbar.scss';
// import {
// 	Collapse,
// 	Navbar,
// 	NavbarToggler,
// 	NavbarBrand,
// 	Nav,
// 	NavItem,
// 	NavLink,
// } from 'reactstrap';
import { Link } from 'react-router-dom';

const MyNavbar: FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className="navbar-container">
			<nav className="my-navbar">
				<Link id="nav-header" className="nav-links" to="/">
					<h4>Built Challenge</h4>
				</Link>
				<Link className="nav-links" to="/">
					Request Loan
				</Link>
				<Link className="nav-links" to="/loans">
					Loans
				</Link>
				<Link className="nav-links" to="/budget">
					Budget
				</Link>
			</nav>
		</div>
	);
};

export default MyNavbar;
