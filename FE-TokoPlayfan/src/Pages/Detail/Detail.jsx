import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';
import CardProduct from '../../components/CardProduct/CardProduct';
import Comment from '../../components/Comment/Comment';

const Headers = () => {
    return (
        <div>
            <div className='flex items-center justify-between p-2 text-[12px] sm:text-xl' >
                <Link to='/' className='flex items-center gap-3 pl-4 hover:text-slate-700 '>
                    <TfiClose color='white' className='text-sm sm:text-[20px] ' />
                    <span className='text-white font-bold hover:text-slate-400'>Home</span>
                </Link>
                <div className='text-white flex items-center justify-center gap-4 p-4 '>
                    <div className='bg-slate-700 rounded-lg text-green-500 font-semibold px-3 py-1 shadow-xl'>
                        <p>TokoPlay</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Detail = () => {
    const url = process.env.REACT_APP_BASE_URL;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const loadDetail = async () => {
            try {
                const response = await fetch(`${url}/thumbnails/video?videoID=${id}`);
                const data = await response.json();
                setVideoUrl(data[0].youtubeUrl);
                setVideoTitle(data[0].title);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        loadDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const loadDetail = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${url}/products?videoID=${id}`);
                const data = await response.json();
                setProducts(data);
                console.log('pro', data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className='bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-2 sm:p-4'>
                <div className="drop-shadow-2xl rounded-2xl">
                    <Headers />

                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
                        <div className='flex flex-row sm:flex-col overflow-x-auto sm:wrap sm:object-none sm:w-[20%] bg-slate-700 rounded-lg p-4 gap-4 '>
                            <h1 className='text-white font-bold flex items-center sm:justify-center sm:text-center'>Products</h1>
                            {loading ? (
                                <h1
                                    style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
                                    className='text-white'
                                >
                                    Loading...
                                </h1>
                            ) : (
                                products.map(({ productID, title, link, discount, price }) => (
                                    <CardProduct key={productID} title={title} price={price} link={link} discount={discount} />
                                ))
                            )}
                        </div>

                        <div className='sm:w-[60%]'>
                            <div className="sm:px-4">
                                {loading ? (
                                    <h1
                                        style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
                                        className='text-white'
                                    >
                                        Loading...
                                    </h1>
                                ) : (
                                    <VideoCard title={videoTitle} videoUrl={videoUrl} />
                                )}
                            </div>
                        </div>

                        <div className='sm:w-[20%] sm:h-[85vh] flex flex-col bg-slate-700 rounded-lg p-4'>
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



const VideoCard = ({ title, videoUrl }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg text-white">
            <div className="relative">
                <iframe
                    title={title}
                    width="100%"
                    height="570.15px"
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-4 bg-slate-700 text-center">
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
        </div>
    );
};

export default Detail;