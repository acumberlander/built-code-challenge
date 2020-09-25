import React from 'react';
import './RequestLoanPage.scss';
import { TextField, Button } from '@material-ui/core';

const RequestLoanPage = () => {
	return (
		<div className="request-loan-container">
			<div className="card">
				<h2 className="card-header">Request a Loan</h2>
				<form action="submit">
					<div className="loan-inputs">
						<div className="input-wrapper">
							<p className="details-header">Requested Loan Amount</p>
							<TextField
								className="input-fields"
								type="number"
								placeholder="Requested Loan Amount"
							/>
						</div>
						<div className="input-wrapper">
							<p className="details-header">Reason for Loan</p>
							<TextField
								className="input-fields"
								type="string"
								placeholder="Reason for Loan"
							/>
						</div>
						<div className="input-wrapper">
							<p className="details-header">Collateral Item</p>
							<TextField
								className="input-fields"
								type="string"
								placeholder="Collateral Item"
							/>
						</div>
						<div className="input-wrapper">
							<p className="details-header">Estimated Collateral Value</p>
							<TextField
								className="input-fields"
								type="number"
								placeholder="Estimated Collateral Value"
							/>
						</div>
					</div>
					<Button className="submit-btn" variant="contained" color="primary">
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

export default RequestLoanPage;
