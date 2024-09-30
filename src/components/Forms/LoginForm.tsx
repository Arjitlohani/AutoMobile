// src/components/Forms/LoginForm.tsx
'use client'
import React from "react";
import {FieldValues, useForm} from 'react-hook-form'

import Navbar from "../utils/Navbar";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues:{
        example: "",
        exampleRequired: ""
    }
  });

  const onSubmit = (data : FieldValues) => {
    console.log(data,"data");
  };

  const handleProfileCard = () => {
    console.log("Profile card handled");
  };

  const isOpenProfileCard = false;

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <Navbar handelProfileCard={handleProfileCard} isOpenProfileCard={isOpenProfileCard} />
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* Include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* Errors will return when field validation fails */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};

export default LoginForm;
