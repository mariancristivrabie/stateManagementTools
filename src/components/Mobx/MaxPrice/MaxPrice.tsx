import { observer } from 'mobx-react-lite'
import { useStore } from 'mobxStore';
import React, { useEffect, useRef } from 'react'

export const MaxPrice = observer(() => {
    const {auctionStore} = useStore();
    const {maxCarPrice} = auctionStore

    const count = useRef(0);

    count.current += 1;

    return(
        <>
            <h2>Renders{count.current}</h2>
            <h2>Max Price:{maxCarPrice}</h2>
        </>
    )
})