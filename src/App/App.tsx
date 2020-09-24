import React, { FunctionComponent } from 'react';
import './App.scss';
import RequestLoanPage from './pages/RequestLoanPage/RequestLoanPage';
import BudgetPage from './pages/BudgetPage/BudgetPage';
import LoansPage from './pages/LoansPage/LoansPage';
import MyNavbar from './components/MyNavbar/MyNavbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const App: FunctionComponent = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<MyNavbar />
				<LoansPage />
				<Switch>
					<Route path="/" exact component={RequestLoanPage} />
					<Route path="/loans" component={LoansPage} />
					<Route path="/budget/:id" component={BudgetPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;