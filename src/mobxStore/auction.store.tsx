import { makeAutoObservable } from "mobx";


class AuctionStore{
    auctions = [
        {
            name:'test',
            startPrice:10
        },
        {
            name: 'test 2',
            startPrice: 15
        }
    ]
    constructor(){
        makeAutoObservable(this);
    }
}

export default AuctionStore