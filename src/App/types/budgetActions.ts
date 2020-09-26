import { Budget } from './Budget';

export const CREATE_BUDGET = 'CREATE_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';

export interface CreateBudgetAction {
	type: typeof CREATE_BUDGET;
	payload: Budget;
}

export interface DeleteBudgetAction {
	type: typeof DELETE_BUDGET;
	id: string;
}

export type BudgetActionTypes = CreateBudgetAction | DeleteBudgetAction;
