import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'

export const StartPrice = observer(({auction}:{auction:any}) => {
    const count = useRef(0);
    let currentCount = count.current;
    const {startPrice} = auction

    useEffect(() => {
        count.current = currentCount;
    });
    
    currentCount += 1;
    return (
        <>
            <h2>Renders:{currentCount}</h2>
            <h2>Start Price:{startPrice}</h2>
        </>
    )
})