import produce from 'immer';

const prevState = {
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
//reducer에서 사용할 객체를 immer통해 간편하게 새로 생성, 불변 객체 생성시 ...도 필요x
const nextState  = produce(prevState,draft=>{
    draft.user.friends[0].age = 50
})

console.log('prevState === nextState:',prevState === nextState);
console.log('prevState.user.friends[0] === nextState.user.friends[0]:',
    prevState.user.friends[0] === nextState.user.friends[0]);

console.log('prevState.user.friends[1] === nextState.user.friends[1]:',
    prevState.user.friends[1] === nextState.user.friends[1]);

console.log('prevState.product === nextState.product:',
    prevState.product === nextState.product);

