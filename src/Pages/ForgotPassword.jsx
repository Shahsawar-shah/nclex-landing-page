import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')

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

          <h2 className="text-2xl font-semibold text-center mb-4">
            Forgot your password?
          </h2>

          <p className="text-sm text-gray-600 text-center mb-6">
            Enter the email address associated with your account and we’ll send
            you a link to reset your password.
          </p>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <hr className="mb-6" />

          {/* Button */}
          <button
            disabled
            className="w-full bg-gray-300 text-white py-3 rounded-lg font-semibold cursor-not-allowed"
          >
            Send Reset Link
          </button>

          {/* Back to login */}
          <div className="text-center mt-6">
            <Link to="/login" className="text-indigo-600 font-medium">
              Back to Log in
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
