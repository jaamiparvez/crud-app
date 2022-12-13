import React from 'react'

interface TableDataProps  {
    id:number,
    name:string,
    phoneNumber:number,

}

const TableData = ({id,name,phoneNumber}: TableDataProps) => {
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
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="pl-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
  )
}

export default TableData