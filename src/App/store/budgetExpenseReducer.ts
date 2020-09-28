import { BudgetExpense } from '../types/Budget';
import {
	CreateBudgetExpenseAction,
	EditBudgetExpenseAction,
	DeleteBudgetExpenseAction,
	CREATE_BUDGET_EXPENSE,
	DELETE_BUDGET_EXPENSE,
	EDIT_BUDGET_EXPENSE,
	BudgetExpenseActionTypes,
	BudgetExpenseState,
} from '../types/budgetExpenseActionModel';

export const createBudgetExpenseAction = (
	budgetExpense: BudgetExpense
): CreateBudgetExpenseAction => ({
	type: CREATE_BUDGET_EXPENSE,
	payload: budgetExpense,
});

export const editBudgetExpenseAction = (
	budgetExpenses: BudgetExpense[]
): EditBudgetExpenseAction => ({
	type: EDIT_BUDGET_EXPENSE,
	payload: budgetExpenses,
});

export const deleteBudgetExpenseAction = (
	budgetExpense: BudgetExpense
): DeleteBudgetExpenseAction => ({
	type: DELETE_BUDGET_EXPENSE,
	payload: budgetExpense,
});

export default function budgetExpensesReducer(
	state: BudgetExpenseState = { budgetExpenses: [] },
	action: BudgetExpenseActionTypes
): BudgetExpenseState {
	switch (action.type) {
		case CREATE_BUDGET_EXPENSE:
			return { budgetExpenses: [...state.budgetExpenses, action.payload] };

		// Had to stop here. Was in the process of setting up the edit switch case,
		// but was having trouble.

		// case EDIT_BUDGET_EXPENSE:
		// 	return {
		// 		...state.budgetExpenses.map(bExpense => {
		// 		if (bExpense.id === action.payload)
		// 	}) ,  action.payload };
		default:
			return state;
	}
}
