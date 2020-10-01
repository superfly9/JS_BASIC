import React from 'react';

export default function SelectNumber ({limit_option,ageLimit,setAgeLimit,desc}) {
    const handleChange = (e) =>{
        const {value} = e.target
       setAgeLimit(Number(value))
    }   
    return (
        <div>
            <select onChange={handleChange} value={ageLimit}>
                {limit_option.map((value,index)=>(
                    <option key={index+1}>
                        {value}
                    </option>
                ))}
            </select>
            {desc}
        </div>
    )
}