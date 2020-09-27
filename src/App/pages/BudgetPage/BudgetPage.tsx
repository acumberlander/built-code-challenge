import React, { Component } from 'react';
import './BudgetPage.scss';
import { AgGridColumn, AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { ItemBudget } from '../../types/Budget';
// import { GridOptions } from '@ag-grid-community/core';
// import { Button } from '@material-ui/core';

type BudgetProps = {
	totalBudget: number;
	itemBudgets: ItemBudget[];
};

export default class BudgetPage extends Component<BudgetProps> {
	state = {
		itemBudgets: [this.props.itemBudgets],
		totalExpenses: 0,
		remainingBalance: this.props.totalBudget,
	};

	// let gridOptions: GridOptions = [];

	// addItemBudget = () => {
	// 	let newItem = {
	// 		item: '',
	// 		weight: '',
	// 		budgeted: null,
	// 		spent: null,
	// 		remaining: null,
	// 	};
	// 	let updatedState = {
	// 		...this.state.itemBudgets,
	// 		newItem,
	// 	};
	// 	gridOptions.api.updateRowDate({
	// 		add: [newItem],
	// 	});
	// 	this.setState({
	// 		itemBudgets: updatedState,
	// 	});
	// };

	onGridReady = (num: number) => {
		let newItem = {
			item: '',
			weight: '',
			budgeted: null,
			spent: null,
			remaining: null,
		};
		let newItemArr = [];
		for (let i = 0; i < num; i++) {
			newItemArr.push(newItem);
		}
		this.setState({ itemBudgets: newItemArr });
		return newItemArr;
	};

	render() {
		const { totalExpenses, remainingBalance } = this.state;
		const { totalBudget, itemBudgets } = this.props;
		return (
			<div className="budget-container">
				{/* <Button
					onClick={this.addItemBudget}
					className="submit-btn"
					variant="contained"
					color="primary"
					type="button"
				>
					Add Budget Item
				</Button> */}
				<div className="budget-card-wrapper">
					<div className="budget-text-wrapper">
						<div className="budget-details-text">
							<p className="bold-text">Total Budget</p>
							<h4 className="bold-text">${totalBudget}</h4>
							<div className="loan-amount-div">
								<p className="light-bold">Loan Amount</p>
								<p className="light-bold">${totalBudget}</p>
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
						modules={[ClientSideRowModelModule]}
						defaultColDef={{
							flex: 1,
							minWidth: 100,
							filter: true,
							editable: true,
						}}
						stopEditingWhenGridLosesFocus={true}
						onGridReady={() => this.onGridReady(20)}
						rowData={itemBudgets}
					>
						<AgGridColumn field="item"></AgGridColumn>
						<AgGridColumn field="weight"></AgGridColumn>
						<AgGridColumn field="budgeted"></AgGridColumn>
						<AgGridColumn field="spent"></AgGridColumn>
						<AgGridColumn field="remaining"></AgGridColumn>
					</AgGridReact>
				</div>
			</div>
		);
	}
}
