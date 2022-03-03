import { createContext, useEffect, useState } from "react";

export const DataProvider = createContext();

const DataContext = ({children}) => {

    const [foods, setFoods] = useState({});

    useEffect(()=>{
        fetch("https://mocki.io/v1/46aeb65d-3a3d-43ea-a92d-5122870a5cd2")
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
        <DataProvider.Provider value={[foods, setFoods]}>
            {children}
        </DataProvider.Provider>
    )
}

export default DataContext;