
import React from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';


const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext);
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 ' >
            return <div className='bg-red-400 py-3 px-4 flex justify-between rounded mb-2'>
                <h2 className='text-lg font-medium w-1/5  text-white'>Employee Name</h2>
                <h3 className='text-lg font-mediumw-1/5  text-white '> New Task</h3>
                <h5 className='text-lg font-medium w-1/5 text-white'>Active Task</h5>

                <h5 className='text-lg font-medium w-1/5   text-white'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5  text-white'>Failed</h5>


            </div>
            <div className='h-[80%] overflow-auto'>
                {userData.map(function (elem,idx) {
                    return <div key={idx} className='border-2 border-emerald-500 py-3 px-4 flex justify-between rounded mb-2'>
                        <h2 className='text-lg font-medium w-1/5 text-white'>{elem.name}</h2>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCounts.newTask}</h5>

                        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.active}</h3>
                        <h5 className=' text-lg font-medium w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>

                    </div>
                })}
            </div>


        </div>
    )
}

export default AllTask;
