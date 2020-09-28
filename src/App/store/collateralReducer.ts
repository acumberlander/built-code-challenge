import { Collateral } from '../types/Collateral';
import {
	CreateCollateralAction,
	DeleteCollateralAction,
	EditCollateralAction,
	CREATE_COLLATERAL,
	DELETE_COLLATERAL,
	EDIT_COLLATERAL,
	CollateralActionTypes,
	CollateralState,
} from '../types/collateralActionModel';

export const createCollateralAction = (
	collateral: Collateral
): CreateCollateralAction => ({
	type: CREATE_COLLATERAL,
	payload: collateral,
});

export const deleteCollateralAction = (
	collateral: Collateral
): DeleteCollateralAction => ({
	type: DELETE_COLLATERAL,
	payload: collateral,
});

export const editCollateralAction = (
	collateral: Collateral
): EditCollateralAction => ({
	type: EDIT_COLLATERAL,
	payload: collateral,
});

export default function collateralReducer(
	state: CollateralState = { collateral: [] },
	action: CollateralActionTypes
): CollateralState {
	switch (action.type) {
		case CREATE_COLLATERAL:
			return { ...state, collateral: [...state.collateral, action.payload] };
		default:
			return state;
	}
}
