import { useStore } from 'mobxStore'
import React from 'react'

const Auctions = () => {
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

export default Auctions