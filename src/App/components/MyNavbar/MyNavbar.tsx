import React, { FunctionComponent } from 'react';
import './MyNavbar.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoanState } from '../../types/loanActionModels';

const MyNavbar: FunctionComponent = () => {
	// @ts-ignore
	const loans = useSelector((state) => (state.loans as LoanState).loans); // current loan state in the redux store
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
					Loans({loans.length})
				</Link>
			</nav>
		</div>
	);
};

export default MyNavbar;
