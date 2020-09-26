import { Budget } from '../types/Budget';
import {
	CreateBudgetAction,
	DeleteBudgetAction,
	CREATE_BUDGET,
	DELETE_BUDGET,
	BudgetActionTypes,
} from '../types/budgetActions';

export interface BudgetState {
	budgets: Budget[];
}

export const createBudgetAction = (budget: Budget): CreateBudgetAction => ({
	type: CREATE_BUDGET,
	payload: budget,
});

export const deleteBudgetAction = (id: string): DeleteBudgetAction => ({
	type: DELETE_BUDGET,
	id: id,
});

export default function budgetsReducer(
	state: BudgetState = { budgets: [] },
	action: BudgetActionTypes
): BudgetState {
	switch (action.type) {
		case CREATE_BUDGET:
			return { ...state, budgets: [...state.budgets, action.payload] };
		default:
			return state;
	}
}
