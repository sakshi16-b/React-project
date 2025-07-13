import React from 'react'

export const TaskListNumbers = () => {
    return (
        <div className='flex mt-2.5 justify-between gap-5 screen'>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-red-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
                </div>
                 <div className='w-[45%] py-6 px-9 rounded-xl bg-blue-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
                </div>
                 <div className='w-[45%] py-6 px-9 rounded-xl bg-green-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
                </div>
                 <div className='w-[45%] py-6 px-9 rounded-xl bg-yellow-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
                </div>
                
        </div>
    )
}
