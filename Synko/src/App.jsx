import React, { useState } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProjectDashboard from './pages/ProjectDashboard.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import { Columns2, Moon } from 'lucide-react'

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const location = useLocation()

  const hideSidebar = location.pathname.startsWith('/login') || location.pathname.startsWith('/signup')

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar: only render if visible and not on login/signup */}
      {!hideSidebar && sidebarVisible && <Sidebar />}

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Top bar */}
        {!hideSidebar && (
          <div className="w-full flex items-center justify-between px-5 h-16 bg-white border-b-2 border-gray-300 shadow z-50">
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
        {/* for project pages we let the inner component handle scrolling so we hide the outer scroll */}
        <div className={`${
          location.pathname.startsWith('/project')
            ? 'flex-1 overflow-hidden'
            : 'flex-1 overflow-y-auto px-9 py-5'
        }`}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/project/:id" element={<ProjectDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/logout' element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
