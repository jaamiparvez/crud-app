import React from 'react'
import Table from "../components/Table"

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="flex justify-center flex-col w-full p-20 h-[]">
    <h1 className="flex justify-center">Dashboard</h1>
   <Table/>
    </div>
  )
}

export default Dashboard