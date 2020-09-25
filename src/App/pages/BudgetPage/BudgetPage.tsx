import React, { useState } from 'react';
import './BudgetPage.scss';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export const BudgetPage = () => {
	const [gridApi, setGridApi] = useState(null);
	const [gridColumnApi, setGridColumnApi] = useState(null);

	const [rowData, setRowData] = useState([
		{ name: 'House', 'budget amount': 175000, remaining: 35000 },
		{ name: 'Supplies', 'budget amount': 25000, remaining: 5000 },
		{ name: 'Labor', 'budget amount': 50000, remaining: 25000 },
	]);

	return (
		<div className="budget-container">
			<div className="budget-text-wrapper">
				<div className="budget-details-text">
					<p className="bold-text">Total Budget</p>
					<h4 className="bold-text">$250,000</h4>
				</div>
				<div className="budget-details-text">
					<p className="bold-text">Total Expenses</p>
					<h4 className="bold-text">$240,000</h4>
				</div>
				<div className="budget-details-text">
					<p className="bold-text">Funds Remaining</p>
					<h4 className="bold-text">$10,000</h4>
				</div>
			</div>
			<hr></hr>
			<div
				className="ag-theme-material grid"
				style={{ height: 500, width: 600 }}
			>
				<AgGridReact rowData={rowData}>
					<AgGridColumn field="name"></AgGridColumn>
					<AgGridColumn field="budget amount"></AgGridColumn>
					<AgGridColumn field="remaining"></AgGridColumn>
				</AgGridReact>
			</div>
		</div>
	);
};

export default BudgetPage;
