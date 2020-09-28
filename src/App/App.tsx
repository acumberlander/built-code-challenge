import React, { Component } from 'react';
import './App.scss';
import RequestLoanPage from './pages/RequestLoanPage/RequestLoanPage';
// import BudgetPage from './pages/BudgetPage/BudgetPage';
import LoansPage from './pages/LoansPage/LoansPage';
import MyNavbar from './components/MyNavbar/MyNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					{/* This test fails. I wasn't about to get this working in time. */}
					<MyNavbar data-testid="my-navbar" />
					<Switch>
						<Route path="/" exact component={RequestLoanPage} />
						<Route path="/loans" component={LoansPage} />
						{/* <Route path="/budget/:id" component={BudgetPage} /> */}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
