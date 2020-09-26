import React, { useState } from 'react';
import './LoansPage.scss';
import { useSelector } from 'react-redux';
import LoanCard from '../../components/LoanCard/LoanCard';
import { LoanState } from '../../types/loanActions';
// import LoanCard from '../../components/LoanCard/LoanCard';

const LoansPage = () => {
	// @ts-ignore
	const loans = useSelector((state) => (state.loans as LoanState).loans);

	const displayedLoans = () =>
		loans.map((loan) => {
			const loanProps = {
				id: loan.id,
				loanReason: loan.loanReason,
				loanAmount: loan.loanAmount,
				collateralAmount: loan.collateralAmount,
				collateralItem: loan.collateralItem,
			};

			return <LoanCard {...loanProps} />;
		});

	return (
		<div className="loans-page-container">
			<div className="loan-page-header-div">
				<h1>Loans</h1>
			</div>
			<hr></hr>
			<div className="grid-container loans-wrapper">
				<LoanCard
					id={'1'}
					loanReason={'Investment Property'}
					loanAmount={250000}
					collateralAmount={300000}
					collateralItem={'House'}
				/>
				{/* {displayedLoans} */}
			</div>
			{/* {displayedLoans} */}
		</div>
	);
};

export default LoansPage;
