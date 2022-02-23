import React from "react";
import { RootStore, StoreProvider } from "../../mobxStore";
import Auctions from "./Auctions/Auctions";
const store = new RootStore();
const MobXExample = () => {
    return(
    <StoreProvider store={store}>
        <Auctions />
    </StoreProvider>
    )
};

export default MobXExample;
