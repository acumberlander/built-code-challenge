import React, { useState } from 'react';
import './LoansPage.scss';
import { useSelector } from 'react-redux';
import LoanCard from '../../components/LoanCard/LoanCard';
import { LoanState } from '../../types/loanActionModels';
import { BudgetState } from '../../types/budgetActionModel';
import { CollateralState } from '../../types/collateralActionModel';
import { createBudgetAction } from '../../store/budgetsReducer';
import BudgetPage from '../BudgetPage/BudgetPage';
import { Loan } from '../../types/Loan';
import { Budget } from '../../types/Budget';
import { Collateral } from '../../types/Collateral';
import store from '../../store/configureStore';

const LoansPage = () => {
	const [seeBudget, setSeeBudget] = useState(false);
	const [budget, setBudget] = useState({} as Budget);
	const [collateral, setCollateral] = useState({} as Collateral);
	// @ts-ignore
	const loans = useSelector((state) => (state.loans as LoanState).loans);

	const collaterals = useSelector(
		// @ts-ignore
		(state) => (state.collateral as CollateralState).collateral
	);

	const handleClick = (props: Loan) => {
		let newItemArray = [
			{
				id: '1',
				item: '',
				weight: '',
				totalBudgetExpense: 0,
				spent: 1234,
				remaining: 123,
			},
			{
				id: '2',
				item: '',
				weight: '',
				totalBudgetExpense: 0,
				spent: 1234,
				remaining: 1234,
			},
		];

		let budgetData = {
			...props,
			totalBudget: props.loanAmount,
			budgetExpenses: newItemArray,
		};

		/**
		 * This will create a new budget everytime 'see budget' button is clicked.
		 * This is not ideal, but I didn't have time to create a process by which it could check
		 * if this action needed to be taken based on the id of the objects. */
		store.dispatch(createBudgetAction(budgetData));
		setBudget(budgetData);
		setSeeBudget(true);
	};

	const displayedLoans = loans.map((loan) => {
		const loanProps = {
			key: loan.id,
			id: loan.id,
			loanReason: loan.loanReason,
			loanAmount: loan.loanAmount,
			collateral: {
				collateralAmount: loan.collateral.collateralAmount,
				collateralItem: loan.collateral.collateralItem,
			},
			handleClick: handleClick,
		};

		return (
			<LoanCard
				key={loanProps.id}
				id={loanProps.id}
				loanReason={loanProps.loanReason}
				loanAmount={loanProps.loanAmount}
				collateral={loanProps.collateral}
				handleClick={handleClick}
			/>
		);
	});

	return (
		<div className="loans-page-container">
			{seeBudget ? (
				<BudgetPage budget={budget} />
			) : (
				<>
					<div className="loan-page-header-div">
						<h1>Loans</h1>
						<hr></hr>
					</div>
					<div className="grid-container loans-wrapper">{displayedLoans}</div>
				</>
			)}
		</div>
	);
};

export default LoansPage;
