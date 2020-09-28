export interface Budget {
	id: string;
	totalBudget: number;
	budgetExpenses: BudgetExpense[];
}

export interface BudgetExpense {
	id: string;
	totalBudgetExpense: number;
}
