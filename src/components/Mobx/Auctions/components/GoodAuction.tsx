import { EndDate } from 'components/Mobx/EndDate';
import { MaxPrice } from 'components/Mobx/MaxPrice/MaxPrice';
import { observer } from 'mobx-react-lite';
import { useStore } from 'mobxStore';
import React, { useState } from 'react'
import '../Auctions.css'

export const GoodAuction = observer(() => {
    const {auctionStore} = useStore();
    const {auctions} = auctionStore
    const [car] = auctions;

    const [carEndDate, setCarEndDate] = useState(car.endDate);
    const [carNewAuctionPrice, setCarNewAuctionPrice] = useState(0);
    const [carNewAuctionName, setCarNewAuctionName] = useState('');


    const handleSaveEndDate = () => {
        auctionStore.setCarEndDate(carEndDate)
    }

    const handleSaveBid = () => {
        auctionStore.setCarNewBid({
            name: carNewAuctionName,
            price: carNewAuctionPrice,
            date: '09.03.2022'
        })
    }

    const handleSaveAll = () => {
        auctionStore.setCarMultipleChanges({
            endDate:carEndDate,
            name: carNewAuctionName,
            price: carNewAuctionPrice,
            date: '09.03.2022'
        })
    } 

    return(
        <div className='auction-container'>
            <div>
                <h2>Correct:</h2>
            </div>
            <div className='auction-actions'>
                <div className='action'>
                    <input type='text' value={carEndDate} className='auction-input' onChange={(e) => setCarEndDate(e.target.value)} />
                    <button className='auction-button' onClick={handleSaveEndDate}> Save </button>
                </div>
                <div className='action'>
                    <input type='text' value={carNewAuctionName} className='auction-input' onChange={(e) => setCarNewAuctionName(e.target.value)} />
                    <input type='number' value={carNewAuctionPrice} className='auction-input' onChange={(e) => setCarNewAuctionPrice(parseInt(e.target.value))} />
                    <button className='auction-button' onClick={handleSaveBid}> Save </button>
                </div>
                <button className='auction-button auction-button-save-all' onClick={handleSaveAll}>Save All</button>
            </div>
            <div className='auction-details'>
                <div className='auction-row'>
                    <div className='auction-cell'>
                        <EndDate auction={car} />
                    </div>
                    <div className='auction-cell'>
                        <MaxPrice />
                    </div>
                </div>
            </div>
        </div>
    )
})