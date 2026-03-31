import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          İletişim
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Benimle iletişime geçin
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <ContactForm />
          </div>

          <div className="md:w-72 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                E-posta
              </h3>
              <a
                href="mailto:info@example.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                info@example.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Sosyal Medya
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
