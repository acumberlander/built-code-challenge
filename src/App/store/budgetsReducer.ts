export interface Budget {
	totalBudget: number;
	itemBudgets: ItemBudget[];
}

export interface ItemBudget {
	totalItemBudget: number;
}

export interface BudgetState {
	budgets: Budget[];
}

export const CREATE_BUDGET = 'CREATE_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';

export interface CreateBudgetAction {
	type: typeof CREATE_BUDGET;
	payload: Budget;
}

export const createBudgetAction = (budget: Budget): CreateBudgetAction => ({
	type: CREATE_BUDGET,
	payload: budget,
});

export interface DeleteBudgetAction {
	type: typeof DELETE_BUDGET;
	meta: {
		timestamp: number;
	};
}

export type BudgetActionTypes = CreateBudgetAction | DeleteBudgetAction;

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
