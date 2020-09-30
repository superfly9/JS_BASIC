import React from 'react';

export default function App () {
    return (
        <div>
            <div>상단</div>
            <Profile name='Seung-chan' />
            <div>하단</div>
        </div>
    )
}

//Profile은 어떤 UI도 그리지 않고, 단지 name을 전달하는 역할만 함에도 컴포넌트를 2번 거쳐써야함
function Profile ({name}) {
    return (
        <div>
            <Greeting name={name} />
        </div>
    )
}
function Greeting ({name}) {
    return (
        <p>{name}님 안녕하세요!</p>
    )
}