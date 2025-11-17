
import './App.css'
import { Header } from './Components/Header/Header'
import { MainNavigation } from './Components/MainNavigate/MainNavigation'
import { Routes, Route } from 'react-router-dom'
import { Task } from './Pages/Task/Task'
import { Dashboard } from './Pages/Dashboard/Dashboard'
import { Expensive } from './Pages/Expensive/Expensive'
import { Settings } from './Pages/Settings/Settings'
import { Signup } from './Pages/Signup/Signup'
import { Login } from './Pages/Login/Login'

function App() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen pt-18 ">
        <MainNavigation />
        <div className="flex-1  lg:ml-52 mb-20 lg:mb-0">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Task" element={<Task />}></Route>
            <Route path="/Expensive" element={<Expensive />}></Route>
            <Route path="/Setting" element={<Settings />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
