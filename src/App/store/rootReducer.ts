import { combineReducers } from 'redux';
import loansReducer from './loansReducer';

export default combineReducers({
	loans: loansReducer,
	// collateral: collateralReducer,
	// budgets: budgetsReducer,
});
