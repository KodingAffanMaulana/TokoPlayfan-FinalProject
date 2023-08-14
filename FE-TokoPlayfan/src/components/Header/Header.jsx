import React, { useContext, useEffect, useState } from 'react';
import UrlImage from '../../assets/img/logo.png';
import './Header.css';
import SearchBox from '../SearchBox/SearchBox';
import { Context } from '../../context/MyContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { searchField, setSearchField, products, setProducts, setFilterProducts } = useContext(Context);
    const url = process.env.REACT_APP_BASE_URL + "/thumbnails";
    console.log(url);
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState(location.pathname);

    const handleNavLinkClick = (route) => {
        setActiveRoute(route);
    };

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((thumbnails) => {
                setProducts(thumbnails);
                console.log(thumbnails);
            });
    }, [setProducts, url]);

    useEffect(() => {
        const newFilteredMonsters = products.filter((product) => {
            return product.title.toLocaleLowerCase().includes(searchField);
        });

        setFilterProducts(newFilteredMonsters);
    }, [products, searchField, setFilterProducts]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const buttonList = ["Explore", "Promo ULTAH!", "Official Store", "Tips & Rekomendasi"
        , "Terbaru", "Upcoming"
    ]


    return (
        <div>
            <div className='flex items-center justify-between p-4'>
                <div className='logo flex items-center'>
                    <img src={UrlImage} alt="logo" className='w-[150px] sm:w-[250px] ' />
                    <span className='text-white text-sm sm:text-lg'>Playfan</span>
                </div>
                <div className='flex items-center'>
                    <SearchBox
                        onChangeHandler={onSearchChange}
                        placeholder='Search live'
                    />
                </div>
            </div>
            <div className='text-white flex items-center p-4 overflow-x-auto sm:justify-center gap-2 text-[12px] sm:text-lg'>
                <div className={activeRoute === '/' ? 'active' : ''}>
                    <button className={`px-4 py-1 whitespace-nowrap border ${activeRoute === '/' ? 'border-green-400' : 'border-gray-400'} rounded-full`}>
                        <Link
                            to="/"
                            onClick={() => handleNavLinkClick('/')}
                            className={`text-[12px] sm:text-lg ${activeRoute === '/' ? 'text-green-400 ' : 'text-black'}`}
                        >
                            Live
                        </Link>
                    </button>
                </div>
                {buttonList.map((button, index) => (
                    <button
                        key={index} // Pastikan setiap elemen memiliki key unik saat menggunakan .map()
                        className='px-4 py-1 whitespace-nowrap' // whitespace-nowrap menghindari pemotongan teks pada tombol yang panjang
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Header;