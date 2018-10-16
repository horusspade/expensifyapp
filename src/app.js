import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 4500, createdAt: -21000 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 1300, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', amount: 109500, createdAt: -21000 }));




const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    )

ReactDOM.render(jsx, document.getElementById('app'));

