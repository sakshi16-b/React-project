import React from 'react'

export const TaskListNumbers = ({ data }) => {
    return (
        <div className='flex mt-2.5 justify-between gap-5 screen'>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-red-400'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-blue-400'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-green-400'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-yellow-400'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}
