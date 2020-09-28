import React, { Component } from 'react';
import './BudgetPage.scss';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Budget, BudgetExpense } from '../../types/Budget';
import { BudgetState } from '../../types/budgetActionModel';
import { connect } from 'react-redux';
import store from '../../store/configureStore';
import {
	deleteBudgetExpenseAction,
	createBudgetExpenseAction,
} from '../../store/budgetExpenseReducer';

type BudgetProps = {
	budget: Budget;
};

class BudgetPage extends Component<BudgetProps> {
	state = {
		budgetExpenses: this.props.budget.budgetExpenses,
		totalExpenses: 0,
		remainingBalance: this.props.budget.totalBudget,
	};

	render() {
		const { totalExpenses, remainingBalance } = this.state;
		const { budget } = this.props;
		return (
			<div className="budget-container">
				<div className="budget-card-wrapper">
					<div className="budget-text-wrapper">
						<div className="budget-details-text">
							<p className="bold-text">Total Budget</p>
							<h4 className="bold-text">${budget.totalBudget}</h4>
							<div className="loan-amount-div">
								<p className="light-bold">Loan Amount</p>
								<p className="light-bold">${budget.totalBudget}</p>
							</div>
							<hr id="line-break"></hr>
						</div>
					</div>
					<div className="expense-remaining-div">
						<div className="budget-details-text total-expenses">
							<p className="bold-text">Total Expenses</p>
							<h4 className="bold-text">${totalExpenses}</h4>
						</div>
						<div className="budget-details-text">
							<p className="bold-text">Funds Remaining</p>
							<h4 className="bold-text">${remainingBalance}</h4>
						</div>
					</div>
				</div>
				<div
					className="ag-theme-alpine grid"
					style={{ height: 500, width: 1000 }}
				>
					<AgGridReact
						defaultColDef={{
							flex: 1,
							minWidth: 100,
							filter: true,
							editable: true,
							// Had to stop here. Planned on abstracting the code below into its own function.
							// The idea here was to grab the updated info and then push that to the budgetExpenses
							// redux store. I found out too late how to go about doing this though.
							onCellValueChanged(newValue: any) {
								// let budgetExpenseArray = budget.budgetExpenses;
								// let updatedBudgetExpense = budgetExpenseArray.filter(
								// 	(id) => id === newValue.data.id
								// )[0];
								// store.dispatch(deleteBudgetExpenseAction(updatedBudgetExpense))
								// let index = ibArray.indexOf(updatedBudgetExpense);
								// let newIbArr = ibArray.splice(index, 1, updatedBudgetExpense);
								// ibArray = newIbArr;
								// store.dispatch(createBudgetAction(budget));
							},
						}}
						rowData={budget.budgetExpenses}
					>
						<AgGridColumn field="item"></AgGridColumn>
						<AgGridColumn field="weight"></AgGridColumn>
						<AgGridColumn field="totalBudgetExpense"></AgGridColumn>
						<AgGridColumn field="spent"></AgGridColumn>
						<AgGridColumn field="remaining"></AgGridColumn>
					</AgGridReact>
				</div>
			</div>
		);
	}
}

// @ts-ignore
export default connect(function ({ budgets }) {
	return { budgetExpenses: budgets.budgets.budgetExpenses };
})(BudgetPage);
