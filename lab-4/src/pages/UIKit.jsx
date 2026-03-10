import { useState } from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'
import Alert from '../components/ui/Alert'

export default function UIKit() {
  const [showAlert, setShowAlert] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8 space-y-16 max-w-6xl">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
          UI Component Kit
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          LAB-4: Tailwind CSS v4 ile Oluşturulmuş Modern Component Kütüphanesi
        </p>
      </div>

      {/* Button Component */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b-2 border-[var(--color-secondary)] pb-2">
          Button Component
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-3">Variants (4)</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Sizes (3)</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Normal</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Input Component */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b-2 border-[var(--color-secondary)] pb-2">
          Input Component
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Input 
            id="normal"
            label="Normal Input" 
            placeholder="Enter text..." 
          />
          <Input 
            id="error"
            label="Error State Input" 
            placeholder="Invalid input"
            error="This field is required" 
          />
          <Input 
            id="help"
            label="With Help Text" 
            placeholder="example@email.com"
            helpText="Enter your email address" 
          />
          <Input 
            id="disabled"
            label="Disabled Input" 
            value="Disabled value"
            disabled 
          />
        </div>
      </section>

      {/* Card Component */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b-2 border-[var(--color-secondary)] pb-2">
          Card Component
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
              Elevated Card
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Shadow-based card with hover effect
            </p>
          </Card>
          <Card variant="outlined">
            <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
              Outlined Card
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Border-based card style
            </p>
          </Card>
          <Card variant="filled">
            <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
              Filled Card
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Background color card
            </p>
          </Card>
        </div>
      </section>

      {/* Alert Component */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b-2 border-[var(--color-secondary)] pb-2">
          Alert Component
        </h2>
        <div className="space-y-4">
          <Alert variant="info">
            <strong>Info Alert:</strong> This is an informational message for the user.
          </Alert>
          <Alert variant="success">
            <strong>Success Alert:</strong> Your action was completed successfully!
          </Alert>
          <Alert variant="warning">
            <strong>Warning Alert:</strong> Please be cautious with this action.
          </Alert>
          <Alert variant="error" dismissible>
            <strong>Error Alert:</strong> Something went wrong. This alert is dismissible.
          </Alert>
        </div>
      </section>

      {/* Responsive Demo */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b-2 border-[var(--color-secondary)] pb-2">
          Responsive Grid Demo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <Card key={num} variant="elevated">
              <h4 className="font-bold text-lg mb-2">Item {num}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Responsive grid: 1 col (mobile), 2 cols (tablet), 4 cols (desktop)
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Dark Mode Demo */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b-2 border-[var(--color-secondary)] pb-2">
          Dark Mode Support
        </h2>
        <Card variant="filled">
          <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
            Theme Toggle
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Toggle the theme using the button in the header. All components support dark mode with the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">dark:</code> prefix.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary in Dark</Button>
            <Button variant="ghost">Ghost in Dark</Button>
          </div>
        </Card>
      </section>

      {/* Summary */}
      <section className="text-center py-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Component Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">4</div>
            <div className="text-gray-600 dark:text-gray-400">Button Variants</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">4</div>
            <div className="text-gray-600 dark:text-gray-400">Input States</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">3</div>
            <div className="text-gray-600 dark:text-gray-400">Card Variants</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">4</div>
            <div className="text-gray-600 dark:text-gray-400">Alert Types</div>
          </div>
        </div>
      </section>
    </div>
  )
}
