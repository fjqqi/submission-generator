import React from "react";

export const TextInput = ({
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="font-apple mt-1 text-3xl block w-full border-0 border-b border-gray-100 bg-transparent focus:border-b-2 focus:border-gray-300 focus:outline-none focus:ring-0"
    />
  );
};