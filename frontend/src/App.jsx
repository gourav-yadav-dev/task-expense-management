import './App.css'
import { Header } from './Components/Header/Header'
import { MainNavigation } from './Components/MainNavigate/MainNavigation'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { PageWrapper } from './Components/Animations/PageWrapper'
const Dashboard = lazy(() => import('./Pages/Dashboard/Dashboard'))
const Task = lazy(() => import('./Pages/Task/Task'))
const Expensive = lazy(() => import('./Pages/Expensive/Expensive'))
const Settings = lazy(() => import('./Pages/Settings/Settings'))
const Signup = lazy(() => import('./Pages/Signup/Signup'))
const Login = lazy(() => import('./Pages/Login/Login'))

function App() {

  const location = useLocation();

  return (
    <>
      <Header />

      <main className="flex min-h-screen pt-20">
        <MainNavigation />

        <div className="flex-1 lg:ml-52 mb-20 lg:mb-0 p-4">
          <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>

           
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Dashboard /></PageWrapper>} />
              <Route path="/Task" element={<PageWrapper><Task /></PageWrapper>} />
              <Route path="/Expensive" element={<PageWrapper><Expensive /></PageWrapper>} />
              <Route path="/Setting" element={<PageWrapper><Settings /></PageWrapper>} />
              <Route path="/Signup" element={<PageWrapper><Signup /></PageWrapper>} />
              <Route path="/Login" element={<PageWrapper><Login /></PageWrapper>} />
            </Routes>

          </Suspense>
        </div>
      </main>
    </>
  )
}

export default App
