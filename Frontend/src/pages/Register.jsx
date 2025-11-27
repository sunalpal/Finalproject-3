import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
  const { register, handleSubmit } = useForm()


  const registerHandler = (data) => {
    console.log(data)

  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>
        <p className="text-gray-500 mb-8">Register to get started</p>

        <input
          {...register("name")}
          className="w-full mb-5 p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-400 outline-none"
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          {...register("email")}
          className="w-full mb-5 p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-400 outline-none"
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          {...register("password")}
          className="w-full mb-5 p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-400 outline-none"
          type="password"
          placeholder="Password"
          required
        />

        <input
          {...register("confirmPassword")}
          className="w-full mb-5 p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-400 outline-none"
          type="password"
          placeholder="Confirm Password"
          required
        />

        <button
          className="w-full mt-4 px-4 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition duration-300"
        >
          Create Account
        </button>

        <p className="mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
