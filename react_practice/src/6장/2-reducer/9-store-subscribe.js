//store는 상태 저장과 액션 처리가 끝났다는 것도 알려줌, 이 때 store.subscribe()사용
import {createStore} from 'redux';
import produce from 'immer';

const INITIAL_STATE  = {count:0};
// createReducer통한 reducer함수 생성
const reducer = createReducer(INITIAL_STATE,{
    INCREMENT : (state)=>state.count+1
})
const store = createStore(reducer);

let prevState;
// 액션 처리가 끝났다는 건,  새로운 state가 store에 저장된 후?
store.subscribe(()=>{
    const state = store.getState(); //가장 최근의 state반환
    console.log('getState():',state);
    if (state === prevState) {
        console.log('상태값 동일')
    } else {
        console.log('상태값 변화');
    }
    prevState = state;
})

store.dispatch({type:'INCREMENT'}); // dispatch(Action) => reducer(state,Action) => new State(store에 전달) => store (new State저장)[액션 처리의 끝?] => view
store.dispatch({type:'SEOUL'});
store.dispatch({type:'INCREMENT'});


//handlerMap은 action.type과 method가 있는 객체
function createReducer (initial_state,handlerMap) {
    return function (state=initial_state,action) {
        return produce(state,draft=>{
            const handler = handlerMap[action.type];
            if (handler) {
                handler(draft,action);
            }
        })
    }
}