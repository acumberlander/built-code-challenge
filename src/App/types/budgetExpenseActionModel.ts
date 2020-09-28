import { BudgetExpense } from './Budget';

export const CREATE_BUDGET_EXPENSE = 'CREATE_BUDGET_EXPENSE';
export const DELETE_BUDGET_EXPENSE = 'DELETE_BUDGET_EXPENSE';
export const EDIT_BUDGET_EXPENSE = 'EDIT_BUDGET_EXPENSE';

export interface BudgetExpenseState {
	budgetExpenses: BudgetExpense[];
}

export interface CreateBudgetExpenseAction {
	type: typeof CREATE_BUDGET_EXPENSE;
	payload: BudgetExpense;
}

export interface EditBudgetExpenseAction {
	type: typeof EDIT_BUDGET_EXPENSE;
	payload: BudgetExpense[];
}

export interface DeleteBudgetExpenseAction {
	type: typeof DELETE_BUDGET_EXPENSE;
	payload: BudgetExpense;
}

export type BudgetExpenseActionTypes =
	| CreateBudgetExpenseAction
	| DeleteBudgetExpenseAction
	| EditBudgetExpenseAction;
