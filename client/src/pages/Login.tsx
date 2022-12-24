import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"

type Props = {}




const Login = (props: Props) => {

    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [showError,setShowError] = useState(false)
    const navigate = useNavigate();
    let location = useLocation();
    const handleLogin = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      user,
      password
    })
  })
    .then(response => {
      console.log(response)
      if(response.ok){
        setShowError(false)
        // return redirect("/dashboard");

      //  return <Navigate replace to="/dashboard" state={{ from: location }} />
    return  response.json().then((parsedJson)=>{
      console.log(parsedJson)
      navigate('/dashboard')
    })
    }else if(response.status === 404) {
      console.log('user not found')
      setShowError(true)
    }
  })
    }
    return (
    <div className="max-w-sm w-full">
        <h1 className="text-2xl text-center ">Login</h1>
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input value={user} onChange={(e)=>setUser(e.target.value)} placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" />
            </div>
            <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            {showError && <p className="mt-1 text-red-600">Username password dont match. Please try again</p>}
            <div className="mt-4 flex items-center justify-center">
              
            <button type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
        Login
      </button>
      </div>
        </form>
        {/* <button onClick={handleLogin}></button> */}
    </div>
  )
}

export default Login