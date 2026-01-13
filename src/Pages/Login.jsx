import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#4F46E5] flex flex-col items-center">

      {/* Logo */}
      <div className="py-10">
        <div className="flex items-center gap-2 text-white text-2xl font-bold">
          <span className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            ★
          </span>
          Bootcamp.com
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center w-full px-4">
        <div className="bg-white w-full max-w-md rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-8">

          <h2 className="text-2xl font-semibold text-center mb-6">
            Log in
          </h2>

          {/* Email */}
          <div className="mb-5">
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Email / username
              </label>
              <span className="text-sm text-gray-400">
                Case Sensitive
              </span>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-indigo-600 font-medium"
              >
                Forgot Password
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Create Account */}
          <div className="text-center mb-6">
            <Link to="/signup" className="text-indigo-600 font-medium">
              Create an account
            </Link>
          </div>

          <hr className="mb-6" />

          {/* Button */}
          <button
            disabled
            className="w-full bg-gray-300 text-white py-3 rounded-lg font-semibold cursor-not-allowed"
          >
            Log In
          </button>

        </div>
      </div>
    </div>
  )
}

export default Login
