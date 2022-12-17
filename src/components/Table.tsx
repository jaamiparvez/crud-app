import React, { useEffect, useState } from 'react'
import TableData from "./TableData"
import TableInput from "./TableInput"
// import {getData} from "../api"
type Props = {}

interface dataInterface  {
    id:number,
    name:string,
    phoneNumber:number,

}


// const data:dataInterface[] = [{ id: 1, name: "John Doe", phoneNumber: 12345678 },
// { id: 1, name: "Jane Doe", phoneNumber: 12345678 }]

const Table = (props: Props) => {

    const [data, setData] = useState<dataInterface[]>()
useEffect(()=>{
    fetch('http://localhost:3000/data',{ method: "GET",
    headers: {
      "Content-Type": "application/json"
    }}).then((data)=>data.json()).then(setData)
},[])

function deleteItem(id:string){
    fetch(`http://localhost:3000/data/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json'
        }
      })
        .then(response => response.json())
}




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
                    {data && data.map(item =>(
                        <TableData key={item.id} id={item.id} dbID={item._id} name={item.name} phoneNumber={item.phoneNumber} handleDelete={deleteItem}/>

                    ))}
                 <TableInput/>

                </tbody>
            </table>
            
        </div>
        </div>
    )
}

export default Table