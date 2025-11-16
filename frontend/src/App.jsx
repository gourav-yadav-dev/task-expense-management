import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header/Header'
import { MainNavigation } from './Components/MainNavigate/MainNavigation'
import { Routes, Route } from 'react-router-dom'
import { Task } from './Pages/Task/Task'
import { Dashboard } from './Pages/Dashboard/Dashboard'
import { Expensive } from './Pages/Expensive/Expensive'
import { Settings } from './Pages/Settings/Settings'

function App() {
  return (
    <>
      <Header />
      <main className="">
        <MainNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Task" element={<Task />}></Route>
            <Route path="/expensive" element={<Expensive />}></Route>
            <Route path="/setting" element={<Settings />}></Route>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
