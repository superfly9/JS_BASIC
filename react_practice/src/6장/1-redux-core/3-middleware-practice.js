import React from 'react';
import {createStore,applyMiddleware} from 'redux';



const INITIAL_STATE = {name:'승찬'}
const SEOUL_LITE ='seoul-lite/seoul'
const seoul_lite = (value)=>({type:SEOUL_LITE,name:value})


//3. middleWare
const printLog = store => next => action => {
    console.log('getState():',store.getState())
    console.log(`Prev State: ${JSON.stringify(store.getState())}`)
    const result = next(action);
    console.log(`Next State: ${JSON.stringify(store.getState())}`)
    return result;
}



//2. Create reducer
const reducer = (state=INITIAL_STATE,action) => {
    console.log('Reducer!')
    const {type}=action;
    switch (type) {
        case SEOUL_LITE:
            return {
                ...state,
                name : action.name
            }
        default:
            return state
    }
}


//1. Create store (reducer,middleware?:옵션)
const store = createStore(reducer,applyMiddleware(printLog));
store.dispatch(seoul_lite('가을의 도착'))


export default function App () {
    return (
        <div>
            리덕스야 리덕스
        </div>
    )
}