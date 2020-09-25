import React from 'react';
import './LoanCard.scss';

const LoanCard = () =>
	// loanAmount: number,
	// collateralAmount: number
	// collateralItem: string
	{
		return (
			<div className="card loan-card-container">
				<h2 className="card-header">Investment Property</h2>
				<div className="loan-details-wrapper">
					<div className="loan-detail">
						<p className="details-header">Loan Amount</p>
						<h3>$250,000</h3>
					</div>
					<div className="loan-detail">
						<p className="details-header">Collateral Amount</p>
						<h3>$350,000</h3>
					</div>
					<div className="loan-detail">
						<p className="details-header">Collateral Item</p>
						<h3>House</h3>
					</div>
				</div>
			</div>
		);
	};

export default LoanCard;
