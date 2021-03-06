import React from 'react';

type InputProps = {
  label?: string,
  placeholder?: string,
  className?: string,
  name?: string,
  type?: string,
  value?: string,
  onChange?: any,
  innerRef?: any,
};

const Input = (props: InputProps) => {
  const { label, placeholder, className, name, type = "text", value, onChange, innerRef = null } = props;

  return (
    <div
      className={`
        relative px-3 py-2 border border-gray-300 rounded-md shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600
        ${className}
      `}
    >
      {label
        && (
          <label
            className="absolute inline-block px-1 -mt-px text-xs font-medium text-gray-500 bg-white -top-2 left-2"
            htmlFor={name}
          >
            {label}
          </label>
        )
      }

      {type === 'textarea' ? (
        <textarea
          className="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
          rows={5}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={innerRef}
        />
      ) : (
        <input
          className="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm"
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={innerRef}
        />
      )}
    </div>
  )
};

export default Input;
