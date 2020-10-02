import React from 'react';

//React.memo는 오로지 성능최적화 위해서 사용, 렌더링 방지위해 사용하면 버그 발생할 수
function MyComponent (props) {
    //...
}
//속성값(props) 비교 함수
function isEqual (prevProps, nextProps) {
    //return true : 컴포넌트 함수 다시 실행X(즉, 컴포넌트 리렌더링X)
    //return false : 컴포넌트 함수 매번 실행=>가상돔 업데이트 후 이전 가상돔과 비교=>바뀐 부분만 실제 돔에 반영
}
// memo()로 감싸지 않거나 memo()의 2번째 인자로 속성 비교함수를 전달하지 않으면 항상 false를 반환하는 리액트의 속성값 비교함수 실행(해당 컴포넌트 속성값 변하지 않아도 컴포넌트 함수 다시 실행,즉 부모 컴포넌트 렌더링 될 때마다 자식도 같이 렌더링 됨)
// 그리고 이 때는 리액트가 얕은 비교함수로 props를 비교(즉, props 객체의 속성들을 하나씩 비교)
// 어느 부분에서 렌더링 상의 이점이 존재? React.memo()통해 불필요한 컴포넌트함수 실행과 가상돔 계산을 막을 수 있기에 렌더링상 이점 생김
React.memo(MyComponent,isEqual);