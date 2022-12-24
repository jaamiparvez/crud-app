import React, { useState } from 'react'
import NameInput from "./NameInput"

interface TableDataProps  {
    id:number,
    name:string,
    phoneNumber:string,
    dbID:string,
    handleDelete:(id:string)=>void,
    handleEdit:(name:string,phoneNumber:string,dbID:string)=>void

}

const TableData = ({id,name,phoneNumber,dbID, handleDelete,handleEdit}: TableDataProps) => {

    const [isEditing,setIsEditing] = useState(false)
    const [newName,setNewName] = useState(name)
    const [newPhoneNumber,setNewPhoneNumber] = useState(phoneNumber)
    const [showError, setShowError] = useState(false)
    function onEdit(){
        setIsEditing(!isEditing)
    }

    function handleDone(){
        if(!/^[A-Za-z ]+$/.test(newName)){
            setShowError(true)
        }else{
            setShowError(false)
        setIsEditing(!isEditing)
        handleEdit(newName,newPhoneNumber,dbID)}
    }

console.log('table data runing')
  return (
    <tr className="border-b even:bg-slate-100 even:border-slate-200 odd:bg-gray-200 odd:border-gray-100">
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
               {id}
                </th>
                <td className="py-4 px-6">
                {isEditing ? 
                <NameInput name={newName} setName={setNewName} showError={showError}/> : name}
                </td>
                <td className="py-4 px-6">
                {isEditing ? <input value={newPhoneNumber} onChange={(e)=>setNewPhoneNumber(e.target.value)} type="text" placeholder="Name"
    className="shadow appearance-none border rounded w-1/2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
 : phoneNumber}
                </td>
                <td className="py-4 px-6">
                    {isEditing ?
                    <button onClick={handleDone} className="font-medium text-blue-600 hover:underline">Done</button>
                    : <button  onClick={onEdit} className="font-medium text-blue-600 hover:underline">Edit</button>
                    }
                    <button onClick={()=>{handleDelete(dbID)}} className="pl-2 font-medium text-red-600 hover:underline">Delete</button>
                </td>
            </tr>
  )
}

export default TableData