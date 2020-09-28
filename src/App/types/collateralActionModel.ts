import { Collateral } from './Collateral';

export const CREATE_COLLATERAL = 'CREATE_COLLATERAL';
export const EDIT_COLLATERAL = 'EDIT_COLLATERAL';
export const DELETE_COLLATERAL = 'DELETE_COLLATERAL';

export interface CollateralState {
	collateral: Collateral[];
}

export interface EditCollateralAction {
	type: typeof EDIT_COLLATERAL;
	payload: Collateral;
}

export interface CreateCollateralAction {
	type: typeof CREATE_COLLATERAL;
	payload: Collateral;
}

export interface DeleteCollateralAction {
	type: typeof DELETE_COLLATERAL;
	payload: Collateral;
}

export type CollateralActionTypes =
	| EditCollateralAction
	| CreateCollateralAction
	| DeleteCollateralAction;
