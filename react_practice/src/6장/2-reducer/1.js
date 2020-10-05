//state의 객체는 불변객체로 관리해야
const state = {
    user : {
        name : 'Seoul',
        friends : [
            {
                name:'Busan',
                age:23
            },
            {
                name:'Yong-in',
                age:29
            }
        ]
    },
    product: []
}

//  { name:'Busan', age:23 }에서 age만 바뀌어도 root객체까지 올라가면서 만나는 모든 객체의 ref가 변한다
//  즉, friends배열 , user ,state객체가 새로운 ref를 가짐
//  따러서  prevState === nextState를 단순비교로 변경 확인 가능, 단 age만 바뀐 상황이기에 prevState.product === nextState.product이다
