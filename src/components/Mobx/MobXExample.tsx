import React from "react";
import { RootStore, StoreProvider } from "../../mobxStore";
import { Auctions } from "components/Mobx";
const store = new RootStore();
const MobXExample = () => {
  return (
    <StoreProvider store={store}>
      <Auctions />
    </StoreProvider>
  );
};

export default MobXExample;
