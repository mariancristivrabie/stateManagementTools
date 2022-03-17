import { EndDateWrong } from 'components/Mobx/EndDateWrong';
import { MaxPigeonPrice } from 'components/Mobx/MaxPigeonPrice/MaxPigeonPrice';
import { observer } from 'mobx-react-lite';
import { useStore } from 'mobxStore';
import React, { useState } from 'react'
import '../Auctions.css'

export const BadAuction = observer(() => {
    const {auctionStore} = useStore();
    const {auctions, maxPigeonPrice} = auctionStore
    const [_, pigeon] = auctions;

    const [pigeonEndDate, setPigeonEndDate] = useState(pigeon.endDate);
    const [pigeonNewAuctionPrice, setPigeonNewAuctionPrice] = useState(0);
    const [pigeonNewAuctionName, setPigeonNewAuctionName] = useState('');


    const handleSavePigeonEndDate = () => {
        auctionStore.setPigeonEndDate(pigeonEndDate)
    }

    const handleSavePigeonBid = () => {
        auctionStore.setPigeonNewBid({
            name: pigeonNewAuctionName,
            price: pigeonNewAuctionPrice,
            date: '09.03.2022'
        })
    }

    const handleSaveAllPigeon = () => {
        auctionStore.setPigeonMultipleChanges({
            endDate:pigeonEndDate,
            name: pigeonNewAuctionName,
            price: pigeonNewAuctionPrice,
            date: '09.03.2022'
        })
    }
    return(
        <div className='auction-container'>
            <div>
                <h2>Wrong:</h2>
            </div>
            <div className='auction-actions'>
                <div className='action'>
                    <input type='text' value={pigeonEndDate} className='auction-input' onChange={(e) => setPigeonEndDate(e.target.value)} />
                    <button className='auction-button' onClick={handleSavePigeonEndDate}> Save </button>
                </div>
                <div className='action'>
                    <input type='text' value={pigeonNewAuctionName} className='auction-input' onChange={(e) => setPigeonNewAuctionName(e.target.value)} />
                    <input type='number' value={pigeonNewAuctionPrice} className='auction-input' onChange={(e) => setPigeonNewAuctionPrice(parseInt(e.target.value))} />
                    <button className='auction-button' onClick={handleSavePigeonBid}> Save </button>
                </div>
                <button className='auction-button auction-button-save-all' onClick={handleSaveAllPigeon} >Save All</button>
            </div>
            <div className='auction-details'>
                <div className='auction-row'>
                    <div className='auction-cell'>
                        <EndDateWrong endDate={pigeon.endDate} />
                    </div>
                    <div className='auction-cell'>
                        <MaxPigeonPrice maxPrice={maxPigeonPrice} />
                    </div>
                </div>
            </div>
        </div>
    )
})