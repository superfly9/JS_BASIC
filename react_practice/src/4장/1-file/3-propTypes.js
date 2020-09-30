import React from 'react';
import PropTypes from 'prop-types'

//isRequired=>반드시 포함되야 하는 props
Greeting.propTypes = {
    name : PropTypes.string.isRequired, //반드시 포함되야 하는 props
    age : PropTypes.number.isRequired,  //반드시 포함되야 하는 props
    info: PropTypes.shape({
        hobby:PropTypes.string,
        location:PropTypes.string
    }),
    experience : PropTypes.arrayOf(PropTypes.number),
    onChange : PropTypes.func.isRequired , //반드시 포함되야 하는 props
    isAdmin : PropTypes.bool
    //propTypes로 함수의 매개변수와 return값의 타입은 체크해줄 수 없기에 주석으로 명시
    // (name:string)=>void 함수의 매개변수와 리턴값을 각각 명시
}

const Greeting = ({name,age,info,experience,onChange,isAdmin})=>{
    return (
        <div>
            <p>안녕 나는 {name}, {age}살 {info.hobby}가 내 취미 </p>
            <input onChange={(name)=>onChange(name)}/>            
        </div>
    )
}