import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router'
import { Footer } from './pages/Footer/Footer'
import { Header } from './pages/Header/Header'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer 
        position="top-right"
        autoClose={2000}
        pauseOnHover={false}
       
      />
   <Header></Header>
   <Outlet></Outlet>
   <Footer></Footer>
    </>
  )
}

export default App
