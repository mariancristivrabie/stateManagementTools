import { EndDateWrong } from 'components/Mobx/EndDateWrong';
import { MaxPigeonPrice } from 'components/Mobx/MaxPigeonPrice/MaxPigeonPrice';
import { NameComponentWrong } from 'components/Mobx/NameComponentWrong';
import { OwnerWrong } from 'components/Mobx/OwnerWrong';
import { StartDate } from 'components/Mobx/StartDate';
import { StartPrice } from 'components/Mobx/StartPrice';
import { observer } from 'mobx-react-lite';
import { useStore } from 'mobxStore';
import React, { useState } from 'react'
import '../Auctions.css'

export const BadAuction = observer(() => {
    const {auctionStore} = useStore();
    const {auctions, maxPigeonPrice} = auctionStore
    const [_, pigeon] = auctions;

    const [pigeonOwner, setPigeonOwner] = useState(pigeon.owner);
    const [pigeonEndDate, setPigeonEndDate] = useState(pigeon.endDate);
    const [pigeonNewAuctionPrice, setPigeonNewAuctionPrice] = useState(0);
    const [pigeonNewAuctionName, setPigeonNewAuctionName] = useState('');

    const handleSavePigeonOwner = () => {
        auctionStore.setPigeonOwner(pigeonOwner);
    }

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
            owner: pigeonOwner,
            endDate:pigeonEndDate,
            name: pigeonNewAuctionName,
            price: pigeonNewAuctionPrice,
            date: '09.03.2022'
        })
    }
    return(
        <div className='auction-container'>
            <div>
                <h3>Wrong:</h3>
            </div>
            <div className='auction-actions'>
                <div className='action'>
                    <input type='text' value={pigeonOwner} className='auction-input' onChange={(e) => setPigeonOwner(e.target.value)} />
                    <button className='auction-button' onClick={handleSavePigeonOwner}> Save </button>
                </div>
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
                    <NameComponentWrong name={pigeon.name} imgSrc={pigeon.imgSrc} />
                </div>
                <div className='auction-row'>
                    <div className='auction-cell'>
                        <StartPrice auction={pigeon} />
                    </div>
                    <div className='auction-cell'>
                        <OwnerWrong owner={pigeon.owner} />
                    </div>
                </div>
                <div className='auction-row'>
                    <div className='auction-cell'>
                        <StartDate auction={pigeon} />
                    </div>
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