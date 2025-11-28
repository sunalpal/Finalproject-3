import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {asyncloginuser}from  "../store/actions/userAction"

import {useDispatch}from "react-redux"

const Login = () => {
  const { register, handleSubmit } = useForm()

  const dispatch=useDispatch();
 
  const loginhandeler = (user) => {
  console.log(user);
  
      dispatch(asyncloginuser(user))
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(loginhandeler)}
        className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back</h2>
        <p className="text-gray-500 mb-8">Login to your account</p>

        <input
          {...register("email")}
          className="w-full mb-5 p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400 outline-none"
          type="email"
          placeholder="Enter your email"
        />

        <input
          {...register("password")}
          className="w-full mb-5 p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400 outline-none"
          type="password"
          placeholder="Password"
        />

        <button
          className="w-full mt-4 px-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        <p className="mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
