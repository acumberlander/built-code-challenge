import { Budget, ItemBudget } from './Budget';

export const CREATE_BUDGET = 'CREATE_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';
export const EDIT_BUDGET = 'EDIT_BUDGET';

export interface BudgetState {
	budgets: Budget[];
	itemBudgets: ItemBudget[];
}

export interface CreateBudgetAction {
	type: typeof CREATE_BUDGET;
	payload: Budget;
}

export interface DeleteBudgetAction {
	type: typeof DELETE_BUDGET;
	payload: Budget;
}

export interface EditBudgetAction {
	type: typeof EDIT_BUDGET;
	payload: Budget;
}

export type BudgetActionTypes =
	| CreateBudgetAction
	| DeleteBudgetAction
	| EditBudgetAction;
