import { createContext, FC, useContext } from 'react';
import AuctionStore from './auction.store';


class RootStore { 
  auctionStore
    constructor() {
      this.auctionStore = new AuctionStore();
    }
}


const StoreContext = createContext<RootStore>(new RootStore());
const StoreProvider: FC<{ store: RootStore }> = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

const useStore = () => useContext(StoreContext);

export { RootStore, StoreProvider, useStore };