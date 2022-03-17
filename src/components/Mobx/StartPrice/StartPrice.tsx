import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'

export const StartPrice = observer(({auction}:{auction:any}) => {
    const count = useRef(0);
    const {startPrice} = auction
  
    count.current ++;
    return (
        <>
            <h2>Renders:{count.current}</h2>
            <h2>Start Price:{startPrice}</h2>
        </>
    )
})