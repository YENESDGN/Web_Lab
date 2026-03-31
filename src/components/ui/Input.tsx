import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: string;
}

export default function Input({ id, label, error, className = "", ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-3 py-2 rounded-lg border text-sm outline-none transition-colors
          bg-white dark:bg-gray-800 text-gray-900 dark:text-white
          border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error ? "border-red-500" : ""} ${className}`}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
