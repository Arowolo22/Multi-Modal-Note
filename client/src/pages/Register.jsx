import React from 'react'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Register = () => {
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
    <div>Register</div>
  )
}

export default Register