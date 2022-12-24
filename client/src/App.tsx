import { useState } from "react"
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from "./pages/Dashboard"
import Login from './pages/Login'
function App() {
  const [user,setUser] = useState<any>()
  return (
    <div className="mx-auto flex justify-center p-20">
     <Routes>
      <Route path="/" element={<Login/>} ></Route>
      <Route path="/dashboard" element={<Dashboard/>} ></Route>
      
      {/* <Route path="/dashboard" element={<ProtectedRoute user={user}> */}
      {/* <Dashboard/> */}
      {/* </ProtectedRoute>} ></Route> */}
      <Route path="*" element={<p className="text-2xl flex justify-center items-center h-screen">There's nothing to see here: 404!</p>} />
     </Routes>
    </div>
  )
}

export default App
