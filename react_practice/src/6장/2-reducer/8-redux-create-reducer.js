import produce from 'immer';

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
// 함수 실행시 type에 걸맞는 객체를 반환해야