import { createStore } from 'redux';

const add = ({a,b }, c) => {
      return  a + b
};
console.log(`hello ${add({ a: 1, b: 12 })}`);

// ({object} = {empty constructor to initalize}) => pointer ({object to be returned});
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 11 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({  } = {}) => ({
    type: 'RESET',
    
});

const setCount = ({ setBy } = {}) => ({
    type: 'SET',
    setBy
});

//reducers
//reducer is a pure function

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':

            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.setBy
            };

        default:
            return state;
    }

};


const store = createStore(countReducer);

const unsubscribe =store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());
store.dispatch(setCount({ setBy: 101 }));

store.dispatch( decrementCount({ decrementBy: 5 }));
store.dispatch( decrementCount());
store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy: 10

    });
