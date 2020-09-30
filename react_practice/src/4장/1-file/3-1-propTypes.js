import PropTypes from 'prop-types';
MyComponent.propTypes = {
    //elemet => 리액트 요소를 의미
    // <header>Seoul</header> => true
    // <SomeComponent /> => true
    // 123 => false
    header : PropTypes.element,

    //node => 컴포넌트 함수가 반환할 수 있는 모든 값
    //number,string,array...
    // <SomeComponent /> => true, 123 => true
    desc : PropTypes.node,

    // City 클래스로 생성된 객체
    // new City() => true , new Age() => false
    city:PropTypes.instanceOf(City),

    
    //배열에 포함된 것 중 하나
    // 'chan','awesome' => true ,  'confuse' => false
    name : PropTypes.oneOf(['chan','awesome']),
    
    //배열에 포함된 타입 중 하나를 만족해야
    // 123 => true , 'asd' =>true , {width : 100} => false
    width: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    
    //array는 arrayOf로, object는 shape나 objectOf로 타입 체크 가능.
    
    // 배열의 원소들이 만족해야 하는 타입을 명시 ['a','b','c'] => true   [1,2,3] => false
    ages : PropTypes.arrayOf(PropTypes.string),
    
    //객체에 사용
    // {color:'red',weight:50} => true , {color:'zzzz',weight:'50'} => false
    info : PropTypes.shape({
        color : PropTypes.string,
        weight : PropTypes.number
    }),
    //객체 value들의 타입을 정의
    // {props1:123,props2:456}=> true , {props1:'abc',props2:123} => false
    infos : PropTypes.objectOf(PropTypes.number)
}

MyComponent.propTypes = {
    year : function (props,propName,componentName) {
        const value = props[propName];
        if (value < 2000 || value>2099) {
            return new Error(
                `Invalid Props ${propName} supplied to ${componentName}.
                 값은 2000 ~ 2099사이여야
                `
            )
        }
    }
}