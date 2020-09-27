import { Loan } from '../types/Loan';
import {
	CREATE_LOAN,
	DELETE_LOAN,
	EDIT_LOAN,
	LoanState,
	LoanActionTypes,
} from '../types/loanActionModels';

/** I learned here to recognize the difference between setting property values
 * and defining the types of those values. I was confused on why I was getting an
 * error for the code below until it dawned on me that I'm setting an object value
 * and that it's unnecessary to type my value because that's already been done in the
 * LoanState interface.
 */
// const initialState: LoanState = {
// 	loans: Loan[]
// };

const initialState: LoanState = {
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

export const editLoanAction = (loan: Loan): LoanActionTypes => ({
	type: EDIT_LOAN,
	payload: loan,
});

export default function loansReducer(
	state: LoanState = initialState,
	action: LoanActionTypes
): LoanState {
	switch (action.type) {
		case CREATE_LOAN:
			return { ...state, loans: [...state.loans, action.payload] };
		case DELETE_LOAN:
			return {
				loans: [...state.loans].filter((loan) => loan !== action.payload),
			};
		case EDIT_LOAN:
			return {
				loans: [...state.loans].map((loan) => {
					if (loan.id === action.payload.id) {
						return {
							...loan,
							...action.payload,
						};
					} else {
						return loan;
					}
				}),
			};
		default:
			return state;
	}
}
