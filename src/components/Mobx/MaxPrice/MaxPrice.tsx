import { observer } from 'mobx-react-lite'
import { useStore } from 'mobxStore';
import React, { useEffect, useRef } from 'react'

export const MaxPrice = observer(() => {
    const {auctionStore} = useStore();
    const {maxCarPrice} = auctionStore

    const count = useRef(0);
    let currentCount = count.current;

    useEffect(() => {
        count.current = currentCount;
    });
    
    currentCount += 1;
    return(
        <>
            <h5>Renders{currentCount}</h5>
            <h2>Max Price:{maxCarPrice}</h2>
        </>
    )
})