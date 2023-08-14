import React from 'react'
import { Link } from 'react-router-dom';
import CardThumbnail from '../CardThumbnail/CardThumbnail';

const Body = ({ filteredProducts }) => {
    return (
        <>
            {(!filteredProducts) ? (
                <h1>Loading</h1>
            ) : (
                <div className='container grid grid-cols-1 gap-2 p-4 sm:grid-cols-5 sm:gap-4 sm:p-8' style={{ scrollBehavior: 'smooth'}}>
                    {filteredProducts.map(({ videoID, title, imageUrl, view }) => (
                        <Link key={videoID} to={`/detail/${videoID}`} className='hover:p-2'>
                            <CardThumbnail className='category-container' view={view} id={videoID} title={title} imageUrl={imageUrl} />
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default Body;