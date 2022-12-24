import React, { useState } from 'react'
import NameInput from "./NameInput"

interface TableInputInterface  {
 
  handleAdd:(id:number,name:string,phoneNumber:string)=>void

}

const TableInput = ({handleAdd}: TableInputInterface) => {
  const [id,setId] = useState(1)
  const [name,setName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [showError, setShowError] = useState(false)
  // const [enabled,setEnabled] = useState(false)

  function handleClick(){
    if(!/^[A-Za-z ]+$/.test(name)){
      setShowError(true)
     
    }else{
      setShowError(false)
    setId((prev)=>prev+1)
    handleAdd(id,name,phoneNumber!) //phoneNumber! means this value will never be null
    setName('')
    setPhoneNumber('')}
  }

  // useEffect
  const isEnabled =  name.length > 0 &&  phoneNumber.length > 0;

  return (
    <tr className="border-b even:bg-slate-100 even:border-slate-200 odd:bg-gray-200 odd:border-gray-100">
    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
      {id}
    </th>
    <td className="py-2 px-6">
      <NameInput name={name} setName={setName} showError={showError}/>
    {/* <input value={name}  pattern="[A-Za-z]" title="Please enter on alphabets only." onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"
    className="shadow appearance-none border rounded w-1/2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
   { showError && <p className="mt-1 text-red-600">Please enter alphabets only</p>} */}
    </td>
    <td className="py-2 px-6">
    <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="Phone Number" 
    className="shadow appearance-none border rounded w-1/2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </td>
    <td className="py-2 px-6">
        <button disabled={!isEnabled} onClick={handleClick} className={`font-medium text-gray-600  text-cente ${isEnabled ? "text-green-600 hover:underline" : "text-gray-600"}`}>Add</button>
    </td>
</tr>
  )
}

export default TableInput