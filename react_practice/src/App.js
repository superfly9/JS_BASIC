import React from 'react';
import {createStore,applyMiddleware} from 'redux';

const middleWare1 = store => next => action => {
    console.log('mid1 start');
    const result = next(action); //middleware2 실행
    console.log('mid1 end');
    return result;
}

const middleWare2 = store => next => action => {
    console.log('mid2 start');
    const result = next(action); //reducer실행
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

//리덕스 실행순서 
//상태 초기화 위해 리듀서 실행 
//dispatch발생하면 applyMiddleware에 전달한 middleware 먼저 실행 후 reducer실행한다

/*
결과
my Reducer
mid1 start
mid2 start
my Reducer
mid2 end
mid1 end
*/