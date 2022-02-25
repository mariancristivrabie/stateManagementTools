import React from 'react'
import { useStore } from 'mobxStore'

export const Auctions = () => {
    const {auctionStore} = useStore();
    const {auctions} = auctionStore

    return (
        <div>
            <ul>
                {auctions.map(auction => (
                <li>
                    <div>{auction.name}</div>
                    <div>Start price: {auction.startPrice}</div>
                </li>))}
            </ul>
        </div>
    )
}