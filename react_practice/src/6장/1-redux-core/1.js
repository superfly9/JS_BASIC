import React from 'react';
import {createStore} from 'redux';
import {useSelector,useDispatch,Provider} from 'react-redux';

const SET_USER_NAME ='setUserName';

export default function App () {
    return (
        <div>
            {/* 1.Provider에 state를 전역적으로 담아놓는 store제공 */}
            <Provider store={store}>
                {/* 데이터를 사용할 컴포넌트 */}

            </Provider>
        </div>
    )
}

//2.store에 reducer전달
const store = createStore(reducer);

const INITIAL_STATE = {
    user : {name:'Seung-chan'},
    product : {name :'Seoul-Lite'}
}

function reducer (state=INITIAL_STATE,action) {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state,
                user:{...state.user,name:action.name}
            };
        default:
            return state;
    }
}

function User () {
    console.log('User Render');
    const user = useSelector(state=>state.user);
    console.log('user',user);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{`${user.name}`}님 안녕하세요</p>
            <button onClick={dispatch({type:SET_USER_NAME,name:'세종대왕'})}>이름 변경</button>
        </div>
    )
}

function Product () {
    console.log('Product Rendering');
    const product = useSelector(state=>state.product);
    console.log('Product:',product);
    return (<p>{`제품 이름:${product.name}`}</p>)
}