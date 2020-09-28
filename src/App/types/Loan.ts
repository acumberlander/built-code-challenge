import { Collateral } from './Collateral';

export interface Loan {
	id: string;
	loanReason: string;
	loanAmount: number;
	collateral: Collateral;
}
