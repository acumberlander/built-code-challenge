export interface Loan {
	loanAmount: number;
	collateralAmount: number;
	// collateralItem: string;
}

export interface LoanState {
	loans: Loan[];
}

export const CREATE_LOAN = 'CREATE_LOAN';
export const DELETE_LOAN = 'DELETE_LOAN';

export interface CreateLoanAction {
	type: typeof CREATE_LOAN;
	payload: Loan;
}
export const createLoanAction = (loan: Loan): CreateLoanAction => ({
	type: CREATE_LOAN,
	payload: loan,
});

export interface DeleteLoanAction {
	type: typeof DELETE_LOAN;
	meta: {
		timestamp: number;
	};
}

export type LoanActionTypes = CreateLoanAction | DeleteLoanAction;

export default function loansReducer(
	state: LoanState = { loans: [] },
	action: LoanActionTypes
): LoanState {
	switch (action.type) {
		case CREATE_LOAN:
			return { ...state, loans: [...state.loans, action.payload] };
		default:
			return state;
	}
}
