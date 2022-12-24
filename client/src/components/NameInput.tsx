import React from 'react'

interface NameInputInterface {
    name:string,
    setName:(name:string)=>void,
    showError:boolean
}

const NameInput = ({name,setName,showError}:NameInputInterface) => {
  return (<>
    <input value={name}  pattern="[A-Za-z]" title="Please enter on alphabets only." onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"
    className="shadow appearance-none border rounded w-1/2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
   { showError && <p className="mt-1 text-red-600">Please enter alphabets only</p>}</>
  )
}

export default NameInput