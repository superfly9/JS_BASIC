import produce from 'immer';

const INITIAL_STATE = {
    todos:[]
}

function reducer (state=INITIAL_STATE,action) {
    // state === draft이다
    return produce(state,draft=>{
        switch (action.type) {
            case ADD:
                draft.todos.push(action.todo) // push쓰는 것만으로 불변객체를 만들어준다(새로운 reference가진 객체)
                /* 기존 방식
                    {...state,
                    todos : [...state.todos,action.todo]
                    }
                */
            case REMOVE_ALL:
                draft.todos = [];
                break;
            case REMOVE:
                draft.todos = draft.todos.filter(todo => todo.id !== action.id);
                break;
            default:
                return draft;
        }
    })
}