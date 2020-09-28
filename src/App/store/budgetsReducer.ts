import { Budget } from '../types/Budget';
import {
	CreateBudgetAction,
	DeleteBudgetAction,
	CREATE_BUDGET,
	DELETE_BUDGET,
	BudgetActionTypes,
	BudgetState,
} from '../types/budgetActionModel';

export const createBudgetAction = (budget: Budget): CreateBudgetAction => ({
	type: CREATE_BUDGET,
	payload: budget,
});

export const deleteBudgetAction = (budget: Budget): DeleteBudgetAction => ({
	type: DELETE_BUDGET,
	payload: budget,
});

export default function budgetsReducer(
	state: BudgetState = { budgets: [] },
	action: BudgetActionTypes
): BudgetState {
	switch (action.type) {
		case CREATE_BUDGET:
			return { budgets: [...state.budgets, action.payload] };
		default:
			return state;
	}
}
