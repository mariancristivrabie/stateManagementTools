import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react'

export const EndDateWrong = ({endDate}:{endDate:string}) => {
    const count = useRef(0);
    let currentCount = count.current;

    useEffect(() => {
        count.current = currentCount;
    });
    
    currentCount += 1;
    return (
        <>
            <h2>Renders: {currentCount}</h2>
            <h2>End: {endDate}</h2>
        </>
    )
}