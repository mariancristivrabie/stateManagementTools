import React, { useEffect, useRef } from 'react'

export const OwnerWrong = ({owner}:{owner:any}) => {
    const count = useRef(0);

    count.current += 1;
    return(
        <>
            <h2>Renders:{count.current}</h2>
            <h2>Owner: {owner}</h2>
        </>
    )
}