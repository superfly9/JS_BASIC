import React,{useState,useEffect,useReducer} from 'react';

export default function App () {
    return (
        <Counter />
    )
}

//주어진 시간을 시/분/초로 환산 후 1초씩 남은 시간이 줄어드는 타이머
const initialState = {count: 100};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
    //useState의 대체 함수, (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환
    //initalState에 넣어준 값 === state의 초기값, dispatch() = reducer()
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
