import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react'

export const NameComponentWrong = ({name, imgSrc}:{name:string, imgSrc:string}) => {
    const count = useRef(0);
    let currentCount = count.current;

    useEffect(() => {
        count.current = currentCount;
    });
    
    currentCount += 1;

    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
            <h2>Renders: {currentCount}</h2>
            <h2>Name:{name}</h2>
        </div>
        <img height={120} src={imgSrc} />
    </div>
    )
}