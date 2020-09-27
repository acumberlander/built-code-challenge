import { Budget } from '../types/Budget';
import {
	CreateBudgetAction,
	DeleteBudgetAction,
	EditBudgetAction,
	CREATE_BUDGET,
	DELETE_BUDGET,
	EDIT_BUDGET,
	BudgetActionTypes,
	BudgetState,
} from '../types/budgetActionModels';

export const createBudgetAction = (budget: Budget): CreateBudgetAction => ({
	type: CREATE_BUDGET,
	payload: budget,
});

export const deleteBudgetAction = (budget: Budget): DeleteBudgetAction => ({
	type: DELETE_BUDGET,
	payload: budget,
});

export const editBudgetAction = (budget: Budget): EditBudgetAction => ({
	type: EDIT_BUDGET,
	payload: budget,
});

export default function budgetsReducer(
	state: BudgetState = { budgets: [], itemBudgets: [] },
	action: BudgetActionTypes
): BudgetState {
	switch (action.type) {
		case CREATE_BUDGET:
			return { ...state, budgets: [...state.budgets, action.payload] };
		default:
			return state;
	}
}
