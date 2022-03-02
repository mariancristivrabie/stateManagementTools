import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react'

export const NameComponent = observer(({auction}:{auction:any}) => {
    const count = useRef(0);
    let currentCount = count.current;

    useEffect(() => {
        count.current = currentCount;
    });
    
    currentCount += 1;

    return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
            <h2>Renders: {currentCount}</h2>
            <h2>Name:{auction.name}</h2>
        </div>
        <img height={120} src={auction.imgSrc} alt='auction img' />
    </div>
    )
})