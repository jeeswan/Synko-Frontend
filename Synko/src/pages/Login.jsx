import React from "react"
import { login } from '../services/auth'
import api from "../services/api";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useProject } from '../context/ProjectContext';

const Login = () => {
  const { setUser } = useProject();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')

    try {
      const res = await login(formData);
      setUser(res.user || res.data.user); // update context
      navigate('/dashboard'); // or /projects if you prefer
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div className="hidden md:block">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Welcome back
          </h1>
          <p className="mt-4 text-gray-600 max-w-sm">
            Log in to manage your workspace, track progress, and stay in control.
          </p>

          <div className="mt-10 text-sm text-gray-400">
            Synko CMS © {new Date().getFullYear()}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            Log In
          </h3>
          <p className="text-gray-500 mb-6 text-sm">
            Enter your credentials to continue
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] cursor-pointer transition"
            >
              Log In
            </button>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <p className="text-center text-sm text-gray-500 mt-1">
              Don't have an account? <a href="/signup" className="text-blue-600 hover:underline cursor-pointer">Sign up</a>
            </p>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login
