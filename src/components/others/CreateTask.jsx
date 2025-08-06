
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getLocalStorage } from '../../utils/localStorage';

function CreateTask() {
    const [userData, setUserData] = useContext(AuthContext);


    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(taskTitle,taskDescription,taskDate,assignTo,category)
        // alert("form submitted")
        setNewTask({
            taskTitle,
            taskDescription,
            taskDate, category,
            active: false, newTask: true,
            failed: false, completed: false
        })
        const data = userData;
        // console.log(data)

        data.forEach(function (elem) {
            // console.log(elem.name)
            if (assignTo == elem.name) {
                elem.tasks.push(newTask)
               // console.log(elem)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);
       // console.log(data)
        // localStorage.setItem("employees",JSON.stringify(data));

        setAssignTo('')
        setCategory('')
        setTaskDescription('')
        setTaskTitle('')
        setTaskDate('')

    }

    return (
        <div>
            <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>

                <form onSubmit={(e) => submitHandler(e)} className='flex flex-wrap w-full item-start justify-between '>

                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline:none bg-transparent border-[1px] border-gray-400 mb-4'
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                type="text" placeholder='Make a UI Design' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline:none bg-transparent border-[1px] border-gray-400 mb-4'
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                type='date' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input className='text-sm text-white  py-1 px-2 w-4/5 rounded outline:none bg-transparent border-[1px] border-gray-400 mb-4'
                                value={assignTo}
                                onChange={(e) => setAssignTo(e.target.value)}
                                type="text" placeholder='Employee Name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline:none bg-transparent border-[1px] border-gray-400 mb-4'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type="text" placeholder='Design,Dev,etc' />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}

                            className='w-full h-44 text-sm text-white py-4 px-2 outline:none bg-transparent border-[1px] border-gray-400 mb-4'
                            name='' id="" cols="30" rows="10"></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
                            Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask;
