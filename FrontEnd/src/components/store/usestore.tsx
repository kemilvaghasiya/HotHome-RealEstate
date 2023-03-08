import { useContext } from 'react';
import rootStoreContext from './index';

// custom hook to acces store
const useStore = () => useContext(rootStoreContext);

export default useStore;
