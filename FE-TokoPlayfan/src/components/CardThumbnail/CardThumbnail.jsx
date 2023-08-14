import React from 'react'
import './Card.css'
import { BsEye } from 'react-icons/bs'

const CardThumbnail = ({ title, imageUrl, view }) => {
    const containerStyle = {
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none', // Menggunakan background image jika imageUrl ada
        backgroundColor: !imageUrl ? 'white' : 'transparent', // Menggunakan background color jika imageUrl tidak ada
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        position: 'relative',
    };

    const col2Style = {
        borderRadius: '10px',
        position: 'relative', // Diperlukan untuk stacking context
    };

    const blurLayerStyle = {
        position: 'absolute',
        width: '100%',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)', // Menambahkan latar belakang gelap
        borderRadius: '10px',
        zIndex: -1, // Mendorong ke lapisan belakang
        top: 0,
        left: 0,
        height: '100%'
    };

    return (
        <div className='main flex flex-col' style={containerStyle}>
            <div className='col1 flex mb-[250px] sm:mb-[100%] items-center p-[8px]'>
                <div className="flex items-center bg-red-600 px-[8px] rounded-[5px] py-[2px] mr-1">
                    <p className='text-[12px]'>LIVE</p>
                </div>
                <div className='flex items-center view px-[5px] rounded-[5px] py-[2px] gap-1'>
                    <BsEye className='text-[12px]' />
                    <p className='text-[12px]'>{view}</p>
                </div>
            </div>
            <div className='col2 z-10 sm:p-2' style={col2Style}>
                <div className='h-[300px] sm:h-[100%] ' style={blurLayerStyle}></div>
                <h2 className='text-xl font-semibold'>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CardThumbnail;