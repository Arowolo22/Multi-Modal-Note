import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import {useState} from "react"
import { auth } from "../config/firebase";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Login = () => {
    const [email,setEmail] = useState("")
    const[password,setPassword]= useState("")
    const [error,setError]= useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
         e.preventDefault();
        setError("")

        try{
            await signInWithEmailAndPassword(auth,email,password)
            toast.success("Logged in successfully")
            navigate("/home")

        }catch(err){
            setError(err.message)
            console.log(err)
        }
    }
  return (
    <div>Login</div>
  )
}

export default Login