import { observer } from 'mobx-react-lite'
import { useStore } from 'mobxStore';
import React, { useEffect, useRef } from 'react'

export const MaxPrice = observer(({isCar}:{isCar:boolean}) => {
    const {auctionStore} = useStore();
    const {maxCarPrice, maxPigeonPrice} = auctionStore

    const count = useRef(0);
    let currentCount = count.current;

    useEffect(() => {
        count.current = currentCount;
    });
    
    currentCount += 1;
    return(
        <>
            <h2>Renders{currentCount}</h2>
            <h2>Max Price:{isCar ? maxCarPrice : maxPigeonPrice}</h2>
        </>
    )
})