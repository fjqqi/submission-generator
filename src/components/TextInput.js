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
      className="mt-1 text-2xl block w-full border-0 border-b-2 border-gray-300 bg-transparent focus:border-b-2 focus:border-gray-300 focus:outline-none focus:ring-0"
    />
  );
};