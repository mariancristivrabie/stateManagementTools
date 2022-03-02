import React, { useEffect, useRef } from 'react'

export const MaxPigeonPrice = ({maxPrice}:{maxPrice:number}) => {
    const count = useRef(0);
    let currentCount = count.current;

    useEffect(() => {
        count.current = currentCount;
    });
    
    currentCount += 1;

    return(
        <>
            <h2>Renders{currentCount}</h2>
            <h2>Max Price:{maxPrice}</h2>
        </>
    )
}