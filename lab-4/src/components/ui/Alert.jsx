import { useState } from 'react'

export default function Alert({ 
  variant = 'info', 
  dismissible = false, 
  children,
  className = ''
}) {
  const [visible, setVisible] = useState(true)
  
  if (!visible) return null
  
  const variants = {
    info: 'bg-blue-50 border-blue-500 text-blue-900 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-700',
    success: 'bg-green-50 border-green-500 text-green-900 dark:bg-green-900/20 dark:text-green-200 dark:border-green-700',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-200 dark:border-yellow-700',
    error: 'bg-red-50 border-red-500 text-red-900 dark:bg-red-900/20 dark:text-red-200 dark:border-red-700'
  }
  
  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  }
  
  return (
    <div 
      className={`border-l-4 p-4 rounded-md ${variants[variant]} ${className}`} 
      role="alert"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-xl">{icons[variant]}</span>
          <div>{children}</div>
        </div>
        {dismissible && (
          <button
            onClick={() => setVisible(false)}
            className="ml-4 text-current opacity-70 hover:opacity-100 font-bold px-2 py-1 rounded hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Kapat"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
