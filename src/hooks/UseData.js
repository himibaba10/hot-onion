import { useContext } from 'react';
import { DataProvider } from '../Context/DataContext';

const UseData = () => {
    return useContext(DataProvider);
};

export default UseData;