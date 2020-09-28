import { combineReducers } from 'redux';
import loansReducer from './loansReducer';
import budgetsReducer from './budgetsReducer';
import collateralReducer from './collateralReducer';
import budgetExpenseReducer from './budgetExpenseReducer';

export default combineReducers({
	loans: loansReducer,
	budgets: budgetsReducer,
	collateral: collateralReducer,
	budgetExpenses: budgetExpenseReducer,
});
