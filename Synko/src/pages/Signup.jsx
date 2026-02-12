import React, {useState} from 'react'
import { signup } from '../services/auth'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signup(formData);
      console.log("SUCCESS:", response.data);
      navigate('/login');
    } catch (error) {
      if (error.response) {
        console.log("SERVER ERROR:", error.response.data);
      } else {
        console.log("NETWORK ERROR:", error.message);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div className="hidden md:block">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Create an Account
          </h1>
          <p className="mt-4 text-gray-600 max-w-sm">
            Get started with Synko to streamline your content management and boost productivity.
          </p>

          <div className="mt-10 text-sm text-gray-400">
            Synko CMS © {new Date().getFullYear()}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            Sign Up
          </h3>
          <p className="text-gray-500 mb-6 text-sm">
            Fill in the details to create your account
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                </label>
                <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                </label>
                <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                </div>
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] cursor-pointer transition"
            >
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-500 mt-1">
              Already have an account? <a href="/login" className="text-blue-600 hover:underline cursor-pointer">Log in</a>
            </p>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Signup
