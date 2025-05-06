import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const navigate = useNavigate();

  async function handleRegister() {
    console.log("Register button clicked");
    console.log({ firstName, lastName, email, password });
  
    if (!email || !firstName || !lastName || !password) {
      toast.error("All fields are required");
      return;
    }else{
  
    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/", {
        firstName,
        lastName,
        email,
        password,
      });
  
      console.log("Registration response:", response);
      toast.success("Registration successful");
      navigate("/login");
    } catch (e) {
      console.error(e);
      toast.error(e.response?.data?.message || "Registration failed");
    }
  }}
  

  return (
    <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex justify-evenly items-center">
      <div className="w-1/2 h-full" />
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-[500px] h-[700px] z-10 backdrop-blur-md rounded-[20px] shadow-2xl flex flex-col justify-center items-center p-6">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] px-4 my-[10px]"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] px-4 my-[10px]"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] px-4 my-[10px]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] px-4 my-[10px]"
          />
          
          <button
            onClick={handleRegister}
            className="w-[300px] h-[50px] cursor-pointer bg-[#c3efe9] rounded-[20px] text-white text-[20px] font-bold my-[20px]" > 
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
