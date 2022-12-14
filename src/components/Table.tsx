import React from 'react'
import TableData from "./TableData"
import TableInput from "./TableInput"

type Props = {}

interface dataInterface  {
    id:number,
    name:string,
    phoneNumber:number,

}

const data:dataInterface[] = [{ id: 1, name: "John Doe", phoneNumber: 12345678 },
{ id: 1, name: "Jane Doe", phoneNumber: 12345678 }]

const Table = (props: Props) => {
    return (
        <div>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="table-auto w-full text-sm text-left text-gray-800 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Phone Number
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>(
                        <TableData id={item.id} name={item.name} phoneNumber={item.phoneNumber} />

                    ))}
                 <TableInput/>

                </tbody>
            </table>
            
        </div>
        </div>
    )
}

export default Table