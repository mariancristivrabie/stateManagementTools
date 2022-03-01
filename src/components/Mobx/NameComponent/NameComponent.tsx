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
    <>
        <h5>Renders: {currentCount}</h5>
        <h2>Name:{auction.name}</h2>
    </>
    )
})