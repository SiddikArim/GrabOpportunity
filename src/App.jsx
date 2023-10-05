import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './Components/Layout/Home'

function App() {
  

  return (
    <div>
        <Home></Home>
        <Outlet></Outlet>
    </div>
  )
}

export default App
