const prevProps = {
    todos : [
        { title : 'Seoul', priority :'high'},
        { title : 'Go to Picnic', priority : 'low'}
        //..
    ],
    hobby : []
}

const nextProps = {
    todos : [
        { title : 'Seoul', priority :'high'},
        { title : 'Go to Picnic', priority : 'high'}
        //..
    ],
    hobby : []
}
//React.memo(component)의 2번째 인자로 속성값 비교함수가 전달 안될때, 리액트는 기본적으로 다음과 같은 비교를 한다
//prevProps,nextProps의 값들을 하나씩 하나씩 비교 => 하나라도 달라진다면 false를 반환하고 이는 component를 리-렌더링 시킨다
//true면 prevProps === nextProps이므로 component 리-렌더링X
const isEqual = prevProps.todos === nextProps.todos && prevProps.hobby === nextProps.hobby;