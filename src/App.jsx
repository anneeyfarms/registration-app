import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'

import './App.css'

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    </>
  )
}

export default App
