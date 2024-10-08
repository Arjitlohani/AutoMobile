// src/components/Forms/LoginForm.tsx
'use client'
import React from "react";
import { FieldValues, useForm } from 'react-hook-form';
import Navbar from "../utils/Navbar";
import Link from "next/link";


const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
        Username: "",
        Password: ""
    }
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data, "data");
  };

  const handleProfileCard = () => {
    console.log("Profile card handled");
  };

  const isOpenProfileCard = false;

  console.log(watch("Username")); // Watch input value by passing the name of it

  return (
    <>
      <Navbar handelProfileCard={handleProfileCard} isOpenProfileCard={isOpenProfileCard} />
      <div className="flex items-center justify-center h-screen">
        {/* Pop-up card */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          {/* Username */}
          <div className="flex flex-col mb-4">
            <label className="mb-2">Username</label>
            <input
              className="bg-slate-200 p-2 rounded-md"
              placeholder="username"
              {...register("Username")}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-4">
            <label className="mb-2">Password</label>
            <input
              className="bg-slate-200 p-2 rounded-md"
              placeholder="Password"
              {...register("Password", { required: true })}
            />
            {errors.Password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Submit Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700" type="submit">
            Submit
          </button>
          <div className='mt-5 flex justify-between text-left'>
        <Link href="Signup/signup-individual" className='text-blue-500'>Create an individual account</Link>

        <Link href="Signup/signup-dealer" className='text-blue-500'>Create an Dealer account</Link>

      </div>
        </form>
        
      </div>
      
    </>
  );
};

export default LoginForm;
