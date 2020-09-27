import { Loan } from './Loan';

export const CREATE_LOAN = 'CREATE_LOAN';
export const EDIT_LOAN = 'EDIT_LOAN';
export const DELETE_LOAN = 'DELETE_LOAN';

export interface LoanState {
	loans: Loan[];
}

export interface EditLoanAction {
	type: typeof EDIT_LOAN;
	payload: Loan;
}

export interface CreateLoanAction {
	type: typeof CREATE_LOAN;
	payload: Loan;
}

export interface DeleteLoanAction {
	type: typeof DELETE_LOAN;
	payload: Loan;
}

export type LoanActionTypes =
	| CreateLoanAction
	| DeleteLoanAction
	| EditLoanAction;
