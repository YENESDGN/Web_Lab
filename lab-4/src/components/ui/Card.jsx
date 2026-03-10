export default function Card({ variant = 'elevated', children, className = '' }) {
  const variants = {
    elevated: 'bg-white shadow-lg hover:shadow-xl dark:bg-gray-800',
    outlined: 'bg-white border-2 border-gray-200 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700',
    filled: 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800'
  }
  
  return (
    <div className={`rounded-lg p-6 transition-all duration-200 ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
