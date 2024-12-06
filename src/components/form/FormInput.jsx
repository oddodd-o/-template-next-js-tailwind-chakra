"use client";

import React, { useState } from 'react';

const FormInput = ({
  id,
  label,
  type = 'text',
  autoComplete,
  required = false,
  helperText,
  validateOnSubmit = false
}) => {
  const [input, setInput] = useState('');
  const [touched, setTouched] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setTouched(true);
  };

  const isError = (validateOnSubmit ? touched : true) && required && input === '';

  return (
    <div className="w-full">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-900 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          value={input}
          required={required}
          autoComplete={autoComplete}
          onChange={handleInputChange}
          onBlur={() => setTouched(true)}
          className={`
            block w-full rounded-md px-3 py-1.5 text-base
            outline outline-1 -outline-offset-1
            ${isError 
              ? 'outline-red-500 focus:outline-red-600' 
              : 'outline-gray-300 focus:outline-indigo-600'
            }
            focus:outline-2 focus:-outline-offset-2
            transition-colors duration-200
          `}
        />
      </div>
      
      <div className="mt-1 text-sm">
        {isError ? (
          <p className="text-red-600">{label}이(가) 필요합니다.</p>
        ) : helperText ? (
          <p className="text-gray-500">{helperText}</p>
        ) : null}
      </div>
    </div>
  );
};

export default FormInput;