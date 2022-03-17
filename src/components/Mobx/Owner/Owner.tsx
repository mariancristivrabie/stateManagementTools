import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react'

export const Owner = observer(({auction}:{auction:any}) => {
    const {owner} = auction;
    const count = useRef(0);

    count.current ++

    return(
        <>
            <h2>Renders:{count.current}</h2>
            <h2>Owner: {owner}</h2>
        </>
    )
})