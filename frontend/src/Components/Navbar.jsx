import React from 'react'

const Navbar = () => {

    const returnToHome = () => {
        window.location.href = "/";
    }

    return (
        <div className='w-full border rounded-lg backdrop-blur-[10px]'>
            <h1 className='text-white font-bold text-center text-[34px] m-9 cursor-pointer hover:scale-[1.05]' onClick={returnToHome}>Dummy Project</h1>
        </div>
    )
}

export default Navbar
