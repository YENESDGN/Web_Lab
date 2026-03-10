import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Alert from '../ui/Alert'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    
    if (formData.name.length < 2) {
      newErrors.name = 'Ad en az 2 karakter olmalıdır'
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz'
    }
    if (!formData.subject) {
      newErrors.subject = 'Lütfen bir konu seçiniz'
    }
    if (formData.message.length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    setSubmitted(true)
    console.log('Form gönderildi:', formData)
  }

  return (
    <section id="iletisim" className="py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)] mb-8 border-b-4 border-[var(--color-secondary)] pb-3">
          İletişim
        </h2>
        
        {submitted && (
          <Alert variant="success" dismissible className="mb-6">
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <fieldset className="space-y-6">
            <legend className="text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] mb-4">
              İletişim Formu
            </legend>
            
            <Input
              id="name"
              label="Ad Soyad:"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              error={errors.name}
              required
            />
            
            <Input
              id="email"
              type="email"
              label="E-posta:"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              error={errors.email}
              required
            />
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Konu:
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-gray-800 dark:text-white"
                required
              >
                <option value="">-- Seçiniz --</option>
                <option value="is">İş Teklifi</option>
                <option value="soru">Soru</option>
                <option value="oneri">Öneri</option>
              </select>
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600" role="alert">{errors.subject}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Mesajınız:
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-gray-800 dark:text-white"
                required
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600" role="alert">{errors.message}</p>
              )}
            </div>
            
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Gönder
            </Button>
          </fieldset>
        </form>
      </div>
    </section>
  )
}
