import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>


    </BrowserRouter>);

export default AppRouter;