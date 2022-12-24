import React, { useState } from 'react'

interface searchInterface {
    handleSearch:(id:string)=>void
    handleCancelSearch:()=>void
}

const Search = ({handleSearch,handleCancelSearch}: searchInterface) => {
    const [search,setSearch] = useState('')
    function handleClick(){
        setSearch('')
        handleCancelSearch()
    }
  
  return (
    <div className=" flex items-center justify-center w-full mb-4">
        <div className="relative flex items-center justify-center">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="string" placeholder="Search" 
    className="shadow appearance-none border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    {search && <button onClick={handleClick} className=" mr-2 rounded-full  text-center text- right-0 absolute  text-gray-600 font-bold text-l ">x</button>}
        </div>
       
    <button onClick={()=>handleSearch(search)} className=" justify-self-center px-2 py-2 bg-blue-500 rounded ml-2 text-white hover:bg-blue-600">Search</button>
   
    </div>
  )
}

export default Search