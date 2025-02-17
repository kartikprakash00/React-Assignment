import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { useParams } from 'react-router-dom';

const Details = () => {

    const { items, error, loading } = useContext(DataContext);
    const { id } = useParams();
    const item = items.find((post) => post.id === Number(id));

    if (loading)
        return <div className='p-6'>Loading...</div>

    if (error)
        return <div className='text-red-500'>{error}</div>

    if (!items)
        return <div className='p-6'>Post not found</div>

    return (
        <div className='flex justify-center'>
            <div className='p-6 text-white flex flex-col w-[100vh] lg:h-[300px] border m-52 justify-evenly backdrop-blur-[10px]'>
                <h1 className='text-4xl font-bold text-center'>{item.title}</h1>
                <p className='mt-6 text-center md:text-[25px]'>{item.body}</p>
            </div>
        </div>
    )
}

export default Details
