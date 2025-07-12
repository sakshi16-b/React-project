import React, { useState } from 'react'

function Login() {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const submitHandler=(e)=>{
  e.preventDefault();
  console.log("Email is", email)
    console.log("Password is", password)

    setEmail('')
    setPassword('')

}

  return (
    <div className='flex h-screen w-screen justify-center items-center'>
      <div className='border-2 border-emerald-600 p-20'>
        <form className='flex flex-col  items-center'
        onSubmit={submitHandler}>
          <input required type="email" onChange={(e)=>setEmail(e.target.value)} value={email}
          className='text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5  placeholder:text-gray-400' placeholder='Email your email' />
          <br />
          <input required type="password" onChange={(e)=>setPassword(e.target.value)} value={password}
          className='text-black outline-none  bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400 mt-3' placeholder='Enter password' />
          <button className=' text-white outline-none border-none  bg-emerald-600 rounded-full py-2 px-8 placeholder:text-white mt-7 w-full hover:bg-emerald-500 font-semibold text-lg'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login;