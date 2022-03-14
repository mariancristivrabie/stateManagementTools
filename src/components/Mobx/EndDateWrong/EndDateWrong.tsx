import React, { useEffect, useRef } from 'react'

export const EndDateWrong = ({endDate}:{endDate:string}) => {
    const count = useRef(0);
    
    count.current += 1;
    return (
        <>
            <h2>Renders: {count.current}</h2>
            <h2>End: {endDate}</h2>
        </>
    )
}