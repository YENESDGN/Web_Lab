export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Web Developer. Tüm hakları saklıdır.</p>
        <nav aria-label="Sosyal medya bağlantıları">
          <ul className="flex justify-center gap-6 flex-wrap">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:info@example.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                E-posta
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
