import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import CreateNote from './pages/CreateNote'
import ViewNote from './pages/ViewNote'
import toast from 'react-hot-toast'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/addnote" element = {<CreateNote/>}/>
        <Route path = "/note/:id" element = {<ViewNote/>}/>
      </Routes>
    </div>
  )
}

export default App
