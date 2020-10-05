//객체의 key는 action.type
//It's unfortunate that many still choose a framework based on whether it uses switch statements in the documentation. 
import {applyMiddleware, createStore} from 'redux';

const { createStore } = require("redux")
const { createReducer } = require("redux-create-reducer")

//If you don't like switch, you can use a custom createReducer function that accepts a handler map
const reducer = createReducer(INITIAL_STATE,{
    [ADD] : (state,action)=>state.todos.push(action.todo),
    [REMOVE_ALL] : (state,action)=>(state.todos = []),
    [REMOVE] : (state,action) => state.todos = state.todos.filter(todo=>todo.id!==action.id)
})

const store = createStore(reducer,applyMiddleware());
store.dispatch({type:'ADD', todo : 'laundry'});
// createReducer(state ,)