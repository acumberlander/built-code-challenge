import { combineReducers } from 'redux';
import loansReducer from './loansReducer';
import budgetsReducer from './budgetsReducer';

export default combineReducers({
	loans: loansReducer,
	budgets: budgetsReducer,
	// collateral: collateralReducer,
});
