import React, { useEffect, useState } from 'react'
import Table from "../components/Table"
import Search from "../components/Search"
import { useNavigate } from "react-router-dom"

type Props = {}

interface dataInterface  {
  id:number,
  name:string,
  phoneNumber:string,
  _id?:string
}

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
  const [data, setData] = useState<dataInterface[]|undefined>()
  const [searchData, setSearchData] = useState<dataInterface[]|undefined>()

  
  useEffect(()=>{
    fetch('http://localhost:3000/data',{ method: "GET",
    headers: {
      "Content-Type": "application/json"
    }}).then((data)=>data.json()).then(setData)
},[])

function handleSearch(id:string){
  fetch(`http://localhost:3000/data/${id}`,{ method: "GET",
  headers: {
    "Content-Type": "application/json"
  }}).then((data)=>data.json()).then(setData)
}
  
function handleCancelSearch(){

  fetch('http://localhost:3000/data',{ method: "GET",
headers: {
"Content-Type": "application/json"
}}).then((data)=>data.json()).then(setData)
}

function handleLogout(){
  localStorage.setItem('isLoggedIn',"false")
  navigate('/login')


}


  return (
    <div className="flex justify-center flex-col w-full p-20 ">
      <button onClick={handleLogout} className=" bg-red-500 hover:bg-red-700 text-center align-middle w-min self-end h-min p-2 text-white font-bold  rounded focus:outline-none focus:shadow-outline">
        Logout
      </button>
    
    <h1 className="flex justify-center text-2xl mb-4 mr-4">Dashboard</h1>
    
  <Search handleSearch={handleSearch} handleCancelSearch={handleCancelSearch}/>
  {data && <Table data={data} setData={setData} searchData={searchData}setSearchData={setSearchData}/> }
   
    </div>
  )
}

export default Dashboard