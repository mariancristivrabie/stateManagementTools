import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import './Auctions.css'
import { BadAuction, GoodAuction } from './components';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const Auctions = () => {
    return (
    <div className='container'>
        <div>
            <h1>
                Auctions:
            </h1>
        </div>
        <div className='auctions'>
            <GoodAuction />
            <BadAuction />
        </div>
    </div>

    )
}