import React from 'react';
import {createStore,applyMiddleware} from 'redux';

const middleWare1 = store => next => action => {
    console.log('mid1 start');
    const result = next(action);
    console.log('mid1 end');
    return result;
}

const middleWare2 = store => next => action => {
    console.log('mid2 start');
    const result = next(action);
    console.log('mid2 end');
    return result;
}
const myReducer = (state,action) => {
    console.log('my Reducer');
    return state;
}

const store = createStore(myReducer,applyMiddleware(middleWare1,middleWare2));

store.dispatch({type:'action'});
export default function App () {
    return <div>리덕스 연습</div>
}