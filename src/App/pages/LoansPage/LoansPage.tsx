import React, { useState } from 'react';
import './LoansPage.scss';
import { useSelector } from 'react-redux';
import LoanCard from '../../components/LoanCard/LoanCard';
import { LoanState } from '../../types/loanActionModels';
import { BudgetState } from '../../types/budgetActionModels';
import BudgetPage from '../BudgetPage/BudgetPage';
import { Loan } from '../../types/Loan';
import { Budget } from '../../types/Budget';

const LoansPage = () => {
	const [seeBudget, setSeeBudget] = useState(false);
	const [budget, setBudget] = useState({} as Budget);
	// @ts-ignore
	const loans = useSelector((state) => (state.loans as LoanState).loans);

	const itemBudgets = useSelector(
		// @ts-ignore
		(state) => (state.budgets as BudgetState).itemBudgets
	);

	const handleClick = (props: Loan) => {
		let newItem = {
			item: '',
			weight: '',
			budgeted: null,
			spent: null,
			remaining: null,
			totalItemBudget: 0,
		};

		let newItemsArr = [newItem, newItem, newItem, newItem, newItem];
		itemBudgets.push(...newItemsArr);

		let budgetData = {
			...props,
			totalBudget: props.loanAmount,
			itemBudgets: itemBudgets,
		};

		setBudget(budgetData);
		setSeeBudget(true);
	};

	const displayedLoans = loans.map((loan) => {
		const loanProps = {
			key: loan.id,
			id: loan.id,
			loanReason: loan.loanReason,
			loanAmount: loan.loanAmount,
			collateralAmount: loan.collateralAmount,
			collateralItem: loan.collateralItem,
			handleClick: handleClick,
		};

		return (
			<LoanCard
				key={loanProps.id}
				id={loanProps.id}
				loanReason={loanProps.loanReason}
				loanAmount={loanProps.loanAmount}
				collateralAmount={loanProps.collateralAmount}
				collateralItem={loanProps.collateralItem}
				handleClick={handleClick}
			/>
		);
	});

	return (
		<div className="loans-page-container">
			{seeBudget ? (
				<BudgetPage {...(budget as Budget)} />
			) : (
				<>
					<div className="loan-page-header-div">
						<h1>Loans</h1>
					</div>
					<hr></hr>
					<div className="grid-container loans-wrapper">{displayedLoans}</div>
				</>
			)}
		</div>
	);
};

export default LoansPage;
