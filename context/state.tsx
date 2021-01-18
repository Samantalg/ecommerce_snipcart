import React, { createContext, useContext } from 'react'
import { useState, useEffect, useMemo } from 'react'
import { fetchEntries } from '../utils/contentfulApi'

const AppContext = createContext({})

export const AppWrapper = ({ children }) => {
    const initialState = [{
        "id": 0,
        "name": "",
        "price": 0.00,
        "image": "",
        "description": "",
        "nameEs": "",
        "descriptionEs": "",
    }]

    const [productsState, setProductsState] = useState(initialState)
    
    useEffect(() => {
        async function loadData() {
            const res = await fetchEntries()
            const catalogue = await res.map((item) => {
                return {
                    id: item.fields.id,
                    name: item.fields.name,
                    nameEs: item.fields.nameEs,
                    price: item.fields.price.toFixed(2),
                    description: item.fields.description,
                    descriptionEs: item.fields.descriptionEs,
                    image: item.fields.image.fields.file.url
                }
            })
            console.log('cat: ', catalogue)
            setProductsState(catalogue)
        }
        loadData()
    }, []);

    const values = useMemo(() => (
        {
            productsState,      // States que seran visibles en el contexto.
        }),
        initialState);

    return (
        <AppContext.Provider value={values.productsState}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}