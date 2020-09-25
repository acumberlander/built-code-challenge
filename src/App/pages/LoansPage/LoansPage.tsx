import React from 'react';
import './LoansPage.scss';
import { useSelector } from 'react-redux';
import { LoanState } from '../../store/loansReducer';
import LoanCard from '../../components/LoanCard/LoanCard';

const LoansPage = () => {
	// @ts-ignore
	const loans = useSelector((state) => (state.loans as LoanState).loans);

	// const displayedLoans = () => {
	// 	loans.map((loan) => (
	// 		<LoanCard
	// 			loanAmount={loan.loanAmount}
	// 			collateralAmount={loan.collateralAmount}
	// 			collateralItem={loan.collateralItem}
	// 		/>
	// 	));
	// };

	return (
		<div className="loans-page-container">
			<div className="loan-page-header-div">
				<h1>Loans</h1>
			</div>
			<hr></hr>
			<div className="loans-wrapper">
				<LoanCard />
				<LoanCard />
				<LoanCard />
				<LoanCard />
				<LoanCard />
			</div>
			{/* {displayedLoans} */}
		</div>
	);
};

export default LoansPage;
