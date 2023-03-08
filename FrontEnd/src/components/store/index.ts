import { createContext } from 'react';
import { RootStore } from './rootstore';

const rootStoreContext = createContext({
  rootStore: new RootStore(),
});

export default rootStoreContext;
