import React from 'react'

interface TableDataProps  {
    id:number,
    name:string,
    phoneNumber:number,
    dbID:string,
    handleDelete:(id:number)=>void

}

const TableData = ({id,name,phoneNumber,dbID, handleDelete}: TableDataProps) => {
    function handleEdit(){
        
    }


  return (
    <tr className="border-b even:bg-slate-100 even:border-slate-200 odd:bg-gray-200 odd:border-gray-100">
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                   {id}
                </th>
                <td className="py-4 px-6">
                {name}
                </td>
                <td className="py-4 px-6">
                    {phoneNumber}
                </td>
                <td className="py-4 px-6">
                    <button onClick={(handleEdit)} className="font-medium text-blue-600 hover:underline">Edit</button>
                    <button onClick={()=>{handleDelete(dbID)}} className="pl-2 font-medium text-red-600 hover:underline">Delete</button>
                </td>
            </tr>
  )
}

export default TableData