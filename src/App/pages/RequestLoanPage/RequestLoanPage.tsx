import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import './RequestLoanPage.scss';
import { TextField, Button } from '@material-ui/core';

interface NewInputProps {
	submitRequest(info: number): void;
}

const RequestLoanPage: FunctionComponent<NewInputProps> = () => {
	const [requestedLoanAmount, setRequestedLoanAmount] = useState(0);
	const [reasonForLoan, setReasonForLoan] = useState('');
	const [collateralItem, setCollateralItem] = useState('');
	const [collateralAmount, setCollateralAmount] = useState(0);

	const updateReqLoanAmount = (e: ChangeEvent<HTMLInputElement>) => {
		setRequestedLoanAmount(parseInt(e.target.value));
	};
	const updateReasonForLoan = (e: ChangeEvent<HTMLInputElement>) => {
		setReasonForLoan(e.target.value);
	};
	const updateCollateralItem = (e: ChangeEvent<HTMLInputElement>) => {
		setCollateralItem(e.target.value);
	};
	const updateCollateralAmount = (e: ChangeEvent<HTMLInputElement>) => {
		setCollateralAmount(parseInt(e.target.value));
	};

	return (
		<div className="request-loan-container">
			<div className="card">
				<h2 className="card-header">Request a Loan</h2>
				<form action="submit">
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
						onClick={() => alert('Sorry! Submit not setup yet!')}
						className="submit-btn"
						variant="contained"
						color="primary"
					>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

export default RequestLoanPage;
