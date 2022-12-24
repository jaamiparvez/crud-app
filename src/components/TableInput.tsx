import React, { useState } from 'react'

type Props = {}

const TableInput = (props: Props) => {
const [name,setName] = useState('')
const [phoneNumber,setPhoneNumber] = useState('')
function handleClick(){
  fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      id:2,
      name,
      phoneNumber
    })
  })
    .then(response => response.json())

    setName('')
    setPhoneNumber('')
}

  return (
    <tr className="border-b even:bg-slate-100 even:border-slate-200 odd:bg-gray-200 odd:border-gray-100">
    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
      1
    </th>
    <td className="py-2 px-6">
    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"
    className="shadow appearance-none border rounded w-1/2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </td>
    <td className="py-2 px-6">
    <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="Phone Number" 
    className="shadow appearance-none border rounded w-1/2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </td>
    <td className="py-2 px-6">
        <button onClick={handleClick}className="font-medium text-green-600 hover:underline text-cente">Add</button>
    </td>
</tr>
  )
}

export default TableInput