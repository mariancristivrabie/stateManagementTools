import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react'

export const EndDate = observer(({auction}:{auction:any}) => {
    const {endDate} = auction
    const count = useRef(0);
    let currentCount = count.current;

    useEffect(() => {
        count.current = currentCount;
    });
    
    currentCount += 1;
    return (
        <>
            <h5>Renders: {currentCount}</h5>
            <h2>End Date:{endDate}</h2>
        </>
    )
})