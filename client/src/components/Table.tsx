import React, { useEffect, useState } from 'react'
import TableData from "./TableData"
import TableInput from "./TableInput"
// import {getData} from "../api"

interface dataInterface  {
    id:number,
    name:string,
    phoneNumber:string,
    _id?:string
  }

interface newItemInterface  {
    id:number,
    name:string,
    phoneNumber:string,
    _id?:string
}
interface tableInterface  {
    data:dataInterface[]|undefined,
    setData:(data:dataInterface[])=>void,
    searchData:dataInterface[]|undefined,
    setSearchData:(data:dataInterface[])=>void,
}



// const data:dataInterface[] = [{ id: 1, name: "John Doe", phoneNumber: 12345678 },
// { id: 1, name: "Jane Doe", phoneNumber: 12345678 }]

const Table = ({data,setData}:tableInterface) => {

    // const [data, setData] = useState<dataInterface[]>()

function handleAdd(id:number, name:string,phoneNumber:string){
    let newItem : newItemInterface = {
        id,
        name,
        phoneNumber,
    }
    newItem.name=name

  fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      id,
      name,
      phoneNumber
    })
  })
    .then(response => {
    response.json().then(parsedJson=>{
        newItem._id = parsedJson._id
        const tempData = [...(data || [])];
         tempData.push(newItem)
         setData(tempData)

    })})
}



function handleDelete(id:string){

    const tempData = [...data as any[]];
    const updatedTempData = tempData.filter(item => item._id !== id);

    setData(updatedTempData)
    fetch(`http://localhost:3000/data/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json'
        }
      })
    
}

function handleEdit(name:string,phoneNumber:string,dbID:string){
    let updatedData = data?.map((item)=>{
        if(item._id === dbID){
            item.name = name
            item.phoneNumber = phoneNumber

            fetch(`http://localhost:3000/data/${dbID}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                  name,
                  phoneNumber
                })
              }).then(response=>response.json())

             
        }
        return item
    })
    setData(updatedData as any)
}

console.log('Data is ',data)
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
                    {data && data.length > 0 ? data.map(item =>(
                    <TableData key={item._id} id={item.id} dbID={item._id} name={item.name} phoneNumber={item.phoneNumber} handleDelete={handleDelete} handleEdit={handleEdit}/>
                    )
                    ) :<tr><td colSpan={4}><p className="text-center text-lg font-bold p-4">No Data Found</p></td></tr>
                    }
{/* {   data.length >0 && <tr><td><p className="text-center">No Data Found</p></td></tr>} */}
                 <TableInput handleAdd={handleAdd}/>

                </tbody>
            </table>
            
        </div>
        </div>
    )
}

export default Table