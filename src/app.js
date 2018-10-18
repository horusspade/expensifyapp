import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configurestore from './store/configurestore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

const store = configurestore();



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    )

ReactDOM.render(jsx, document.getElementById('app'));

