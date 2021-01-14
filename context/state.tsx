import React, { createContext, useContext } from 'react'
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
            const response = await import('../public/api/data.json')
            const products = response.products
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
    return useContext(AppContext)
}