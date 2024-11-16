import React, { ChangeEvent } from 'react';

interface CustomInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ id, label, value, onChange, error }) => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        id={id}
        placeholder=" " // Keep this empty to utilize the label as the placeholder
        className={`peer h-12 w-full border border-gray-300 rounded-lg px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : ''}`}
        required
        value={value}
        onChange={onChange}
        onBlur={() => {
          if (!value) {
            error = 'Please enter something';
          }
        }}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all 
          ${value || error ? '-top-3 left-1 text-gray-500' : 'top-2 left-3 text-gray-500'}
          peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 
          peer-focus:-top-3 peer-focus:left-1 peer-focus:text-gray-500 bg-white`}
      >
        {label}*
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomInput;
