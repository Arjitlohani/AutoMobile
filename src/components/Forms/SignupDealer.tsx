'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  emailOtp: string;
  mobileOtp: string;
  password: string;
  confirmPassword: string;
  agreeToWhatsAppUpdates: boolean;
}

const SignupDealer: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="relative w-full h-[570px]">
      <div className="absolute inset-0 flex justify-between items-center px-10 z-10"> {/* z-10 for signup dealer */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold text-center mb-4">Create Your Dealer Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  {...register('firstName', { required: 'First name is required' })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="First Name"
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
              </div>
              <div>
                <input
                  {...register('lastName', { required: 'Last name is required' })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Last Name"
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
              </div>
              <div>
                <input
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <input
                  {...register('mobile', { required: 'Mobile number is required' })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Mobile No."
                />
                {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
              </div>
              <div>
                <input
                  {...register('emailOtp', { required: 'Email OTP is required' })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Email OTP"
                />
                {errors.emailOtp && <p className="text-red-500">{errors.emailOtp.message}</p>}
              </div>
              <div>
                <input
                  {...register('mobileOtp', { required: 'Mobile OTP is required' })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Mobile OTP"
                />
                {errors.mobileOtp && <p className="text-red-500">{errors.mobileOtp.message}</p>}
              </div>
              <div>
                <input
                  type="password"
                  {...register('password', { required: 'Password is required' })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              <div>
                <input
                  type="password"
                  {...register('confirmPassword', { required: 'Confirm password is required' })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
              </div>
              <div className="col-span-2">
                <div className="flex items-center">
                  <input type="checkbox" {...register('agreeToWhatsAppUpdates')} />
                  <span className="ml-2">Get updates on WhatsApp</span>
                </div>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                  Create Account
                </button>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span>Existing user? <a href="#" className="text-blue-500">Log in</a></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupDealer;
