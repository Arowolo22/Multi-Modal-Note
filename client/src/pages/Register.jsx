import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")
    const [error,setError]= useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
   


    try{
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Registered successfully")
        console.log(userCredential)
        navigate("/login")
    }catch(err){
        setError(err.message)
        console.log(err)
    }
}
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 shadow-md bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center">
          <h1 className="mt-6 font-extrabold text-4xl text-blue-900 flex jusify-center item-center">
            NOTE APP
          </h1>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                id="First-Name"
                name="firstName"
                type="text"
                autoComplete="first-name"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div>
              <input
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="last-name"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900  focus:outline-none focus:ring-2 focus:ring-offset-2">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register