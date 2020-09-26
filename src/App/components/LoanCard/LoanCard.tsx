import React from 'react';
import './LoanCard.scss';
import { Button } from '@material-ui/core';

const LoanCard = (props: {
	id: string;
	loanReason: string;
	loanAmount: number;
	collateralAmount: number;
	collateralItem: string;
}) => {
	return (
		<div key={props.id} className="card loan-card-container">
			<h2 className="card-header">{props.loanReason}</h2>
			<div className="loan-details-wrapper">
				<div className="loan-detail">
					<p className="details-header">Loan Amount</p>
					<h3>${props.loanAmount}</h3>
				</div>
				<div className="loan-detail">
					<p className="details-header">Collateral Amount</p>
					<h3>${props.collateralAmount}</h3>
				</div>
				<div className="loan-detail">
					<p className="details-header">Collateral Item</p>
					<h3>{props.collateralItem}</h3>
				</div>
			</div>
			<div id="see-budget-button-div">
				<Button
					onClick={() => alert('Sorry! Seeing the budget is not setup yet!')}
					className="primary see-budget-button"
					variant="contained"
					color="primary"
				>
					See Budget
				</Button>
			</div>
		</div>
	);
};

export default LoanCard;
