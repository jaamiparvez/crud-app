import {Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Login from './pages/Login'
function App() {
 
  return (
    <div className="">
     <Routes>
      <Route path="/" element={<Login/>} ></Route>
      <Route path="/dashboard" element={<Dashboard/>} ></Route>
     </Routes>
    </div>
  )
}

export default App
