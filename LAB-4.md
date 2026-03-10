# LAB-4: Tailwind CSS Üretken UI Component Yaklaşımı

## Genel Bakış

LAB-4'te Vite + React + Tailwind CSS v4 teknolojileri kullanılarak modern bir UI component kütüphanesi geliştirilmiştir. Proje, LAB-2 ve LAB-3'te oluşturulan semantik HTML portföyünün React component'lerine dönüştürülmesini, 4 temel UI component'in (Button, Input, Card, Alert) oluşturulmasını ve dark mode, responsive tasarım ile erişilebilirlik standartlarının uygulanmasını içermektedir.

## Proje Konumu

LAB-4 projesi, ana workspace içerisinde `lab-4/` klasöründe ayrı bir Vite+React projesi olarak oluşturulmuştur.

```
Web_Lab/
├── lab-4/          # LAB-4 React projesi (YENİ)
├── src/            # LAB-2/LAB-3 static HTML projesi
├── LAB-2.md
├── LAB-3.md
└── LAB-4.md        # Bu dosya
```

## Teknoloji Stack'i

- **Vite 6.x**: Modern, hızlı build tool
- **React 18**: UI component library
- **Tailwind CSS v4**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **@tailwindcss/vite**: Tailwind Vite plugin'i

## Tamamlanan Görevler

### ✅ 1. Git İş Akışı

```bash
git checkout -b Lab_4
```

### ✅ 2. Kurulum ve Yapılandırma

**Proje Oluşturma**:
```bash
mkdir lab-4
cd lab-4
npm create vite@latest . -- --template react
```

**Tailwind CSS v4 Kurulumu**:
```bash
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install react-router-dom
```

**vite.config.js Yapılandırması**:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**index.css - Tailwind Import + @theme**:
```css
@import "tailwindcss";

@theme {
  --color-primary: #1e3a8a;
  --color-secondary: #2563eb;
  /* LAB-3'ten taşınan tüm design tokens */
}

@custom-variant dark (&:where(.dark, .dark *));
```

### ✅ 3. UI Component'leri

#### Button Component
- **Dosya**: `src/components/ui/Button.jsx`
- **Variants**: primary, secondary, danger, ghost (4)
- **Sizes**: sm, md, lg (3)
- **States**: normal, disabled
- **Dark Mode**: ✅
- **Accessibility**: focus:ring-2

#### Input Component
- **Dosya**: `src/components/ui/Input.jsx`
- **States**: normal, error, help text, disabled (4)
- **Features**: Label, error message, help text
- **ARIA**: aria-invalid, aria-describedby
- **Dark Mode**: ✅

#### Card Component
- **Dosya**: `src/components/ui/Card.jsx`
- **Variants**: elevated, outlined, filled (3)
- **Features**: Hover effects, transition
- **Dark Mode**: ✅

#### Alert Component
- **Dosya**: `src/components/ui/Alert.jsx`
- **Variants**: info, success, warning, error (4)
- **Features**: Dismissible, icons
- **ARIA**: role="alert"
- **Dark Mode**: ✅

### ✅ 4. Dark Mode

**ThemeToggle Component**:
- `src/components/ThemeToggle.jsx`
- localStorage ile persistence
- System preference detection
- document.documentElement.classList toggle

**CSS Custom Variant**:
```css
@custom-variant dark (&:where(.dark, .dark *));
```

### ✅ 5. Portfolio Component'leri

LAB-2 ve LAB-3'teki static HTML portföyü React'e taşındı:

- **Header.jsx**: Sticky navigation, skip link, theme toggle
- **About.jsx**: Flexbox layout, skill tags, profil bilgileri
- **Projects.jsx**: Grid layout, Card component kullanımı
- **Contact.jsx**: Form validation, Input component, Alert
- **Footer.jsx**: Sosyal medya linkleri

### ✅ 6. UI Kit Showcase Sayfası

**Dosya**: `src/pages/UIKit.jsx`

**Sergilenen Component Varyantları**:
1. Button: primary, secondary, danger, ghost, sm, md, lg, disabled (8+)
2. Input: normal, error, help text, disabled (4)
3. Card: elevated, outlined, filled (3)
4. Alert: info, success, warning, error + dismissible (4)
5. Responsive Grid Demo
6. Dark Mode Demo

**Toplam**: 15+ component varyantı sergilendi

### ✅ 7. React Router

**Dosya**: `src/App.jsx`

**Routes**:
- `/` → Portfolio sayfası
- `/ui-kit` → UI Kit showcase

**Navigation**: Sticky navbar ile sayfa geçişi

### ✅ 8. Responsive Tasarım

Tailwind'in mobile-first breakpoint'leri kullanıldı:

| Component | Mobil | Tablet (md:) | Desktop (lg:) |
|-----------|-------|--------------|---------------|
| Header Nav | Column | Row | Row |
| About | Column | Row (flex) | Row |
| Projects Grid | 1 col | 2 cols | 2 cols |
| UI Kit Grid | 1 col | 2 cols | 4 cols |

### ✅ 9. Erişilebilirlik

- ✅ `focus:ring-2` tüm interactive element'lerde
- ✅ `aria-label` butonlarda
- ✅ `aria-invalid`, `aria-describedby` form'larda
- ✅ `role="alert"` error mesajlarında
- ✅ Skip link (Header'da)
- ✅ Semantic HTML
- ✅ Keyboard navigation

## Teknik Özellikler

### Tailwind CSS v4 Yenilikleri

1. **@theme direktifi**: CSS variables yerine
2. **@custom-variant**: Dark mode için
3. **Vite plugin**: Daha hızlı build
4. **No config file**: Çoğu şey @theme ile

### Design Tokens

LAB-3'teki design tokens Tailwind'e taşındı:

```css
@theme {
  /* Renkler */
  --color-primary: #1e3a8a;
  --color-secondary: #2563eb;
  
  /* Spacing (8px sistem) */
  --spacing-md: 1rem;
  
  /* Typography */
  --font-sans: system-ui, sans-serif;
}
```

### Responsive Stratejisi

Mobile-first yaklaşım:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

## LAB-2/LAB-3'ten Farklılıklar

| Aspect | LAB-2/3 | LAB-4 |
|--------|---------|-------|
| **Teknoloji** | Static HTML + CSS | React + Tailwind |
| **Stil** | CSS dosyaları | Utility classes |
| **Component** | HTML template | React components |
| **Dark Mode** | Manuel CSS | Tailwind dark: |
| **Responsive** | Media queries | Responsive prefixes |
| **Build** | http-server | Vite |
| **State** | Vanilla JS | React hooks |

## Proje Çalıştırma

```bash
cd lab-4
npm install
npm run dev
```

Tarayıcıda: `http://localhost:5173`

## Teslim Kontrol Listesi (✅ Tamamlandı)

### Kurulum
- ✅ Vite + React projesi çalışıyor (`npm run dev`)
- ✅ Tailwind CSS v4 kurulu
- ✅ `@theme` ile özel renk/font tanımlı
- ✅ Hot reload aktif

### Component'ler
- ✅ Button: 4 variant + 3 size + disabled
- ✅ Input: error, help text, disabled
- ✅ Card: 3 variant (elevated, outlined, filled)
- ✅ Alert: 4 variant + dismissible

### Özellikler
- ✅ Responsive: `sm:`, `md:`, `lg:` kullanıldı
- ✅ Dark mode: Toggle + localStorage
- ✅ Erişilebilirlik: focus, aria, role

### Sayfalar
- ✅ UI Kit: 15+ component varyantı
- ✅ Portfolio: LAB-2/LAB-3'ten React'e taşındı

### Git
- ✅ Lab_4 branch oluşturuldu
- ✅ Anlamlı commitler
- ✅ GitHub'a push hazır

## Git Commit Geçmişi

```bash
# 1. Proje kurulumu
git commit -m "feat: initialize Vite + React + Tailwind CSS v4 project"

# 2. Tailwind yapılandırması
git commit -m "feat: configure Tailwind CSS v4 with @theme and design tokens"

# 3. UI Components
git commit -m "feat: add Button, Input, Card, Alert components with variants"

# 4. Dark mode
git commit -m "feat: implement dark mode with ThemeToggle and @custom-variant"

# 5. Portfolio conversion
git commit -m "feat: convert LAB-2/LAB-3 portfolio to React components"

# 6. Pages and routing
git commit -m "feat: add Portfolio and UIKit pages with React Router"

# 7. Documentation
git commit -m "docs: add comprehensive LAB-4 documentation"
```

## Öğrenilenler

1. ✅ Tailwind CSS v4 kurulumu ve @theme kullanımı
2. ✅ Vite ile modern React projesi oluşturma
3. ✅ Utility-first CSS yaklaşımı
4. ✅ React component library pattern'leri
5. ✅ Props ve variant sistemi
6. ✅ Dark mode implementation (Tailwind)
7. ✅ Responsive prefix'ler (sm:, md:, lg:)
8. ✅ Component-driven development
9. ✅ React Router ile SPA routing
10. ✅ Design tokens migration (CSS → Tailwind)

## Sonraki Adımlar

- [ ] TypeScript entegrasyonu
- [ ] Component prop types validation
- [ ] Daha fazla component (Badge, Modal, Dropdown)
- [ ] Storybook dokümantasyonu
- [ ] Component testing (Vitest)
- [ ] Animation ve transitions
- [ ] Accessibility audit

## Kaynaklar

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)

---

**Proje Durumu**: ✅ Tamamlandı  
**Branch**: Lab_4  
**Tarih**: 2025  
**Teknoloji**: React + Vite + Tailwind CSS v4
