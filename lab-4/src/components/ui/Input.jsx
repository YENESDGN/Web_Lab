export default function Input({
  label,
  error,
  helpText,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={props.id}
          className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border rounded-md transition-colors focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-white
          ${error 
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] dark:border-gray-600'
          } ${className}`}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : helpText ? `${props.id}-help` : undefined}
        {...props}
      />
      {error && (
        <p id={`${props.id}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${props.id}-help`} className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  )
}
