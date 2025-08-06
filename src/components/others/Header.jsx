
import React, { useState } from 'react'

function Header(props) {
    
    // const [username, setUserName] = useState('')

    const logoutUser = () => {
        localStorage.setItem('loggedInUser', "");
        console.log(props.changeUser);
        props.changeUser('');
    }


    return (

        <div className='flex items-end justify-between'>
            <h1 className='text-2xl text-white font-medium'>Hello <br /><span className='text-3xl text-white font-semibold'>
                {
                    props.data ? props.data.name : "Admin"
                }👋</span></h1>
            <button onClick={logoutUser} className='bg-red-500 text-white px-5 py-2 text-lg font-medium rounded-sm'>Log Out</button>
        </div>

 )
}

export default Header
