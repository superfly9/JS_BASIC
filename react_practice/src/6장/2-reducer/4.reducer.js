const INITIAL_STATE = {
    todos:[]
}

function reducer (state=INITIAL_STATE,action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos : [...state.todos,action.todo]
            }
        case REMOVE_ALL:
            return {
                ...state,
                todos : []
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo=>todo.id !== action.id)
            }
        default:
            return state;
    }
}