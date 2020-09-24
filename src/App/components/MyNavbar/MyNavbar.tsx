import React, { FunctionComponent, useState } from 'react';
import './MyNavbar.scss';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

const MyNavbar: FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className="navbar-container">
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Built Challenge</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/">Request Loan</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="loans">Loans</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="budget">Budget</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MyNavbar;
