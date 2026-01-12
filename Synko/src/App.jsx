import React, { useState } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import { Columns2, Moon } from 'lucide-react'

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const location = useLocation()

  const hideSidebar = location.pathname.startsWith('/login') || location.pathname.startsWith('/signup')

  return (
    <div className="flex h-screen">
      {/* Sidebar: only render if visible and not on login/signup */}
      {!hideSidebar && sidebarVisible && <Sidebar />}

      {/* Main content */}
      <div className="flex-1 relative bg-gray-100 overflow-y-auto">
        {/* Top bar */}
        {!hideSidebar && (
          <div className="fixed w-full flex items-center justify-between px-5 h-16 bg-gray-100 border-b-2 border-gray-300 shadow z-50">
            {/* Sidebar toggle button */}
            <button
              onClick={() => setSidebarVisible(!sidebarVisible)}
              className="p-2 rounded hover:bg-gray-200 transition"
            >
              <Columns2 size={24} />
            </button>

            {/* Dark mode icon */}
            <button className="p-2 rounded hover:bg-gray-200 transition">
              <Moon size={20} />
            </button>
          </div>
        )}

        {/* Page content */}
        <div className="pt-16 px-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
