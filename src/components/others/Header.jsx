import React from 'react'

function Header() {
    return (

        <div className='flex items-end justify-between'>
            <h1 className='text-2xl text-white font-medium'>Hello <br /><span className='text-3xl text-white font-semibold'> User👋</span></h1>
            <button className='bg-red-500 text-white px-5 py-2 text-lg font-medium rounded-sm'>Log Out</button>
        </div>


    )
}

export default Header