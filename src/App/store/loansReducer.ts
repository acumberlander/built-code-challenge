import { Loan } from '../types/Loan';
import {
	CREATE_LOAN,
	DELETE_LOAN,
	LoanState,
	LoanActionTypes,
} from '../types/loanActions';

const initialState = {
	loans: [],
};

export const deleteLoanAction = (loan: Loan): LoanActionTypes => ({
	type: DELETE_LOAN,
	payload: loan,
});

export const createLoanAction = (loan: Loan): LoanActionTypes => ({
	type: CREATE_LOAN,
	payload: loan,
});

export default function loansReducer(
	state: LoanState = initialState,
	action: LoanActionTypes
): LoanState {
	switch (action.type) {
		case CREATE_LOAN:
			return { ...state, loans: [...state.loans, action.payload] };
		// case DELETE_LOAN:
		// 	return {
		// 		...state.loans.filter((loan) => loan !== action.payload),
		// 	};
		default:
			return state;
	}
}
