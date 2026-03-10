export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  children,
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-md transition-all duration-200 focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-[var(--color-primary)] text-white hover:opacity-90 focus:ring-[var(--color-primary)] dark:bg-[var(--color-secondary)]',
    secondary: 'bg-[var(--color-secondary)] text-white hover:opacity-90 focus:ring-[var(--color-secondary)]',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 dark:bg-red-700',
    ghost: 'bg-transparent border-2 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 dark:text-gray-200'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
