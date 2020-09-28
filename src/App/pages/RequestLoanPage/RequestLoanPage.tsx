import React, { ChangeEvent, useState } from 'react';
import './RequestLoanPage.scss';
import { TextField, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { createLoanAction } from '../../store/loansReducer';
import { createCollateralAction } from '../../store/collateralReducer';
import { LoanState } from '../../types/loanActionModels';
import store from '../../store/configureStore';

const RequestLoanPage = () => {
	const [requestedLoanAmount, setRequestedLoanAmount] = useState(0);
	const [reasonForLoan, setReasonForLoan] = useState('');
	const [collateralAmount, setCollateralAmount] = useState(0);
	const [collateralItem, setCollateralItem] = useState('');

	// @ts-ignore
	const loans = useSelector((state) => (state.loans as LoanState).loans); // current loan state in the redux store

	const collateralObj = useSelector(
		// @ts-ignore
		(state) => (state.collateral as CollateralState).collateral[0]
	);

	/** Input/state update functions. These functions allow for state to be updated
	 * simultaneously with the input.
	 */
	const updateReqLoanAmount = (e: ChangeEvent<HTMLInputElement>) => {
		setRequestedLoanAmount(parseInt(e.target.value));
	};

	/** Input/state update functions. These functions allow for state to be updated
	 * simultaneously with the input.
	 */
	const updateReasonForLoan = (e: ChangeEvent<HTMLInputElement>) => {
		setReasonForLoan(e.target.value);
	};

	/** Input/state update functions. These functions allow for state to be updated
	 * simultaneously with the input.
	 */
	const updateCollateralItem = (e: ChangeEvent<HTMLInputElement>) => {
		setCollateralItem(e.target.value);
	};

	/** Input/state update functions. These functions allow for state to be updated
	 * simultaneously with the input.
	 */
	const updateCollateralAmount = (e: ChangeEvent<HTMLInputElement>) => {
		setCollateralAmount(parseInt(e.target.value));
	};

	/** This is the loan object being passed into the form.
	 * This object is also being passed in as a parameter (with a Type of Loan)
	 * to the createLoanAction() function or action.
	 */
	const loanToPass = {
		id: '',
		loanReason: reasonForLoan,
		loanAmount: requestedLoanAmount,
		collateral: {
			collateralAmount: collateralAmount,
			collateralItem: collateralItem,
		},
	};

	const submitRequest = () => {
		if (requestedLoanAmount > collateralAmount) {
			alert(
				"Sorry.. You're request for this loan about has been denied. Your collateral must be greater than your request amount."
			);
			return;
		}
		let loadId: number =
			// Checking if loans array is empty to determine what id value should be set for each new item.
			loans.length === 0 ? 1 : parseInt(loans[loans.length - 1].id) + 1;
		loanToPass.id = `${loadId}`;
		store.dispatch(createLoanAction(loanToPass));
		store.dispatch(createCollateralAction(loanToPass.collateral));
		alert('Your loan was approved!');
		setRequestedLoanAmount(0);
		setReasonForLoan('');
		setCollateralAmount(0);
		setCollateralItem('');
	};

	return (
		<div className="request-loan-container">
			<div className="card">
				<h2 className="card-header">Request a Loan</h2>
				<form onSubmit={submitRequest}>
					<div className="loan-inputs">
						<div className="input-wrapper">
							<p className="details-header">Reason for Loan</p>
							<TextField
								className="input-fields"
								type="string"
								placeholder="Reason for Loan"
								value={reasonForLoan}
								// @ts-ignore
								onChange={updateReasonForLoan}
							/>
						</div>
						<div className="input-wrapper">
							<p className="details-header">Requested Loan Amount</p>
							<TextField
								className="input-fields"
								type="number"
								placeholder="Requested Loan Amount"
								value={requestedLoanAmount}
								// @ts-ignore
								onChange={updateReqLoanAmount}
							/>
						</div>
						<div className="input-wrapper">
							<p className="details-header">Collateral Item</p>
							<TextField
								className="input-fields"
								type="string"
								placeholder="Collateral Item"
								value={collateralItem}
								// @ts-ignore
								onChange={updateCollateralItem}
							/>
						</div>
						<div className="input-wrapper">
							<p className="details-header">Estimated Collateral Value</p>
							<TextField
								className="input-fields"
								type="number"
								placeholder="Estimated Collateral Value"
								value={collateralAmount}
								// @ts-ignore
								onChange={updateCollateralAmount}
							/>
						</div>
					</div>
					<Button
						onClick={submitRequest}
						className="submit-btn"
						variant="contained"
						color="primary"
						type="button"
					>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

export default RequestLoanPage;
