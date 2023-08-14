import React, { useContext } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import { Context } from '../../context/MyContext';

const Home = () => {
    const { filteredProducts } = useContext(Context);

    return (
        <>
            <Header />
            <Body filteredProducts={filteredProducts} />
        </>
    );
}

export default Home;