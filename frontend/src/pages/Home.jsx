import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/DataContext'
import { Link } from 'react-router-dom';

const Home = () => {

  const { items, error, loading } = useContext(DataContext);
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='p-6'>
      <input type="text" placeholder='Search Post' className='border rounded-md h-16 p-2 w-full mb-20 mt-9 bg-transparent text-white backdrop-blur-[10px]' value={search} onChange={(e) => setSearch(e.target.value)} />
      {error && <div className='text-red-500'>{error}</div>}
      {loading ? (
        <div className='text-white text-center'>Loading...</div>
      ) : (
        <div className='grid md:grid-cols-3 gap-9'>
          {filteredItems.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`} className='border p-4 rounded shadow text-gray-200 flex flex-col justify-between backdrop-blur-[10px] hover:scale-[1.05] transition-all hover:shadow-black'>
              <h2 className='text-2xl mb-7 font-bold text-center'>{item.title}</h2>
              <p className='text-center'>{item.body.substring(0, 100)}...</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home
