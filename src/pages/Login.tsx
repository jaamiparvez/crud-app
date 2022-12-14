import React, { useState } from 'react'

type Props = {}




const Login = (props: Props) => {

    const [user,setUser] = useState<any>()

    const handleLogin = () =>{
        setUser({id:1,name:"jaami"})
    }
    return (
    <div className="max-w-sm w-full">
        <h1 className="text-2xl text-center ">Login</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" />
            </div>
            <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input type="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div className="mt-4 flex items-center justify-center">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
        Login
      </button>
      </div>
        </form>
        <button onClick={handleLogin}></button>
    </div>
  )
}

export default Login