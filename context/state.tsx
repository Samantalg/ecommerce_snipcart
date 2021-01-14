import React, { createContext, useContext } from 'react';
import { useState, useEffect, useMemo } from 'react'
const AppContext = createContext({})

export const AppWrapper = ({ children }) => {
    const initialState = [{
        "id": 0,
        "name": "",
        "price": 0.00,
        "image": "",
        "description": ""
    }]
    const [productsState, setProductsState] = useState(initialState)
    useEffect(() => {
        async function loadData() {
            const response = await import('../api/data.json')
            const products = await response.products
            console.log('state', products)
            setProductsState(products)
        }
        loadData()
    }, initialState);

    const values = useMemo(() => (
        {
            productsState,      // States que seran visibles en el contexto.
        }),
        initialState);

    return (
        <AppContext.Provider value={values.productsState}>
            {children}
        </AppContext.Provider>
    );
}


export function useAppContext() {
    const context = useContext(AppContext);

    if (!context) {
        console.error('Error deploying App Context!!!');
    }

    return context;
}