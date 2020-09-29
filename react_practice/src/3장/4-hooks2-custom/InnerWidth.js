import React from 'react';
import useInnerWitdh from './useInnerWidth';

//리사이즈시 Effect2 => (Seoul=>Effect1) 순으로 출력
export default function WidthPrinter () {
    const width = useInnerWitdh();
    return (
        <div>
            {`width is ${width}`}
        </div>
    )
}