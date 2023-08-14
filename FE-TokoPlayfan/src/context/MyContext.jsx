import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [searchField, setSearchField] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilterProducts] = useState(products);
    return (
        <Context.Provider value={{ searchField, setSearchField, products, setProducts, filteredProducts, setFilterProducts }}>
            {children}
        </Context.Provider>
    );
};