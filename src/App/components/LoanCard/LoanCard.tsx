import React from 'react';
import './LoanCard.scss';
import { Button } from '@material-ui/core';
import { Collateral } from '../../types/Collateral';

/** I learned that you can't pass in multiple parameters into a fn component individually
 * when using typescript in React. See Example
 * Example: const LoanCard = ({id: string, loanReason: string, loanAmount: number}) => {} <-- This won't work
 * You must pass in a props parameters where you will then set its type by filling in the
 * needed values as see in the active code.
 */

const LoanCard = (props: {
	id: string;
	loanReason: string;
	loanAmount: number;
	collateral: Collateral;
	handleClick: any;
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
					<h3>${props.collateral.collateralAmount}</h3>
				</div>
				<div className="loan-detail">
					<p className="details-header">Collateral Item</p>
					<h3>{props.collateral.collateralItem}</h3>
				</div>
			</div>
			<div id="see-budget-button-div">
				<Button
					onClick={() => props.handleClick(props)}
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
