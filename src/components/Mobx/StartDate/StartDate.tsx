import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react'

export const StartDate = observer(({auction}:{auction:any}) => {
    const {startDate} = auction
    const count = useRef(0);

    count.current += 1;
    return (
        <>
            <h2>Renders: {count.current}</h2>
            <h2>Start: {startDate}</h2>
        </>
    )
})