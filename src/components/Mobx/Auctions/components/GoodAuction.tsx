import { EndDate } from 'components/Mobx/EndDate';
import { MaxPrice } from 'components/Mobx/MaxPrice/MaxPrice';
import { NameComponent } from 'components/Mobx/NameComponent';
import { Owner } from 'components/Mobx/Owner';
import { StartDate } from 'components/Mobx/StartDate';
import { StartPrice } from 'components/Mobx/StartPrice';
import { observer } from 'mobx-react-lite';
import { useStore } from 'mobxStore';
import React, { useState } from 'react'
import '../Auctions.css'

export const GoodAuction = observer(() => {
    const {auctionStore} = useStore();
    const {auctions} = auctionStore
    const [car] = auctions;

    const [carOwner, setCarOwner] = useState(car.owner);
    const [carEndDate, setCarEndDate] = useState(car.endDate);
    const [carNewAuctionPrice, setCarNewAuctionPrice] = useState(0);
    const [carNewAuctionName, setCarNewAuctionName] = useState('');

    const handleSaveOwner = () => {
        auctionStore.setCarOwner(carOwner);
    }

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
            owner: carOwner,
            endDate:carEndDate,
            name: carNewAuctionName,
            price: carNewAuctionPrice,
            date: '09.03.2022'
        })
    } 

    return(
        <div className='auction-container'>
            <div>
                <h3>Correct:</h3>
            </div>
            <div className='auction-actions'>
                <div className='action'>
                    <input type='text' value={carOwner} className='auction-input' onChange={(e) => setCarOwner(e.target.value)} />
                    <button className='auction-button' onClick={handleSaveOwner}> Save </button>
                </div>
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
                    <NameComponent auction={car} />
                </div>

                <div className='auction-row'>
                    <div className='auction-cell'>
                        <StartPrice auction={car} />
                    </div>
                    <div className='auction-cell'>
                        <Owner auction={car} />
                    </div>
                </div>
                <div className='auction-row'>
                    <div className='auction-cell'>
                        <StartDate auction={car} />
                    </div>
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