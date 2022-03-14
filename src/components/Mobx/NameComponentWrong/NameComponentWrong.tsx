import React, { useEffect, useRef } from 'react'

export const NameComponentWrong = ({name, imgSrc}:{name:string, imgSrc:string}) => {
    const count = useRef(0);
  
    count.current += 1;

    return (
        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
        <div>
            <h2>Renders: {count.current}</h2>
            <h2>Name:{name}</h2>
        </div>
        <img height={120} src={imgSrc} alt='auction img' />
    </div>
    )
}