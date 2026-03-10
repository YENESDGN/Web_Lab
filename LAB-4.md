# LAB-4: Tailwind CSS Entegrasyonu

## Proje Hakkında

LAB-4'te Tailwind CSS, mevcut LAB-2/LAB-3 projesine entegre edilmiştir. Ayrı bir React projesi yerine, mevcut HTML üzerine Tailwind utility class'ları eklenerek responsive tasarım, dark mode ve modern styling sağlanmıştır.

## Yapılan Değişiklikler

### 1. Tailwind CSS Entegrasyonu

**CDN üzerinden Tailwind CSS eklendi** (`src/index.html`):

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#1E3A8A',
          secondary: '#2563EB',
        }
      }
    }
  }
</script>
```

### 2. Dark Mode

**Dark Mode Toggle Button** eklendi (sağ üst köşe):
- 🌙 (Light mode) / 🌞 (Dark mode) icon'ları
- localStorage ile tercih kaydediliyor
- `document.documentElement.classList.toggle('dark')` ile çalışıyor
- Tüm bölümlerde `dark:` prefix'li Tailwind class'ları

### 3. Tailwind Utility Class'ları

**Header**:
```html
<header class="bg-primary text-white sticky top-0 z-20 shadow-md dark:bg-secondary">
```

**Responsive Navigasyon**:
```html
<ul class="flex flex-wrap gap-4 md:gap-6 justify-center">
```

**Hakkımda Bölümü** (Flexbox):
```html
<div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
```

**Projeler** (Grid):
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
```

**Form**:
```html
<input class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white" />
```

### 4. Responsive Tasarım

| Element | Mobil | Tablet+ (md:) |
|---------|-------|---------------|
| Layout | `flex-col` | `md:flex-row` |
| Grid | `grid-cols-1` | `md:grid-cols-2` |
| Text | `text-3xl` | `md:text-4xl` |
| Padding | `py-12 px-4` | `md:py-16` |

### 5. Erişilebilirlik

- ✅ ARIA attributes korundu
- ✅ Focus states (`focus:ring-2`)
- ✅ Skip link
- ✅ Semantic HTML
- ✅ Keyboard navigation

## Proje Yapısı

```
Web_Lab/
├── src/
│   ├── index.html          # ✅ Tailwind class'ları eklendi
│   ├── styles/
│   │   ├── main.css        # Mevcut CSS (korundu)
│   │   ├── tokens.css
│   │   ├── layout.css
│   │   └── components.css
│   └── assets/
├── tailwind.config.js      # Tailwind yapılandırması
├── LAB-4.md               # Bu dosya
└── package.json
```

## Kurulum ve Çalıştırma

```bash
npm run dev
```

Tarayıcıda: `http://localhost:8080`

## LAB-4 Özellikleri

### ✅ Tailwind CSS
- CDN üzerinden eklendi
- Utility-first yaklaşım
- Custom colors (primary, secondary)

### ✅ Dark Mode
- Sağ üst köşede toggle butonu
- localStorage ile persistence
- Tüm bölümlerde dark mode desteği

### ✅ Responsive
- Mobile-first (`md:` breakpoint 768px)
- Flexbox ve Grid layouts
- Responsive typography

### ✅ Component-Like Classes
- Tailwind utility class'ları ile
- Mevcut CSS korundu
- Hybrid yaklaşım

## LAB-2/LAB-3'ten Farklılıklar

| Aspect | LAB-2/LAB-3 | LAB-4 |
|--------|-------------|-------|
| CSS | Vanilla CSS | Vanilla CSS + Tailwind |
| Dark Mode | Yok | ✅ Toggle button |
| Responsive | Media queries | Tailwind prefixes |
| Stil Yaklaşımı | CSS dosyaları | Hybrid (CSS + utility) |
| Build | http-server | http-server (aynı) |

## Git Branch

**Branch**: `Lab_4`

Tüm değişiklikler Lab_4 branch'inde:
```bash
git branch  # Lab_4
git log --oneline -1
```

## Push

GitHub'a push etmek için:

```bash
git push -u origin Lab_4
```

## Öğrenilenler

1. ✅ Tailwind CSS CDN entegrasyonu
2. ✅ Tailwind utility class'ları
3. ✅ Dark mode implementation (vanilla JS)
4. ✅ Responsive prefixes (md:, dark:)
5. ✅ Hybrid CSS yaklaşımı (Vanilla + Tailwind)
6. ✅ Mevcut projeye Tailwind ekleme

## Notlar

- **Ayrı proje yok**: lab-4/ klasörü kaldırıldı
- **Tek HTML**: Tüm değişiklikler `src/index.html`'de
- **Mevcut CSS korundu**: LAB-2/LAB-3 CSS'leri hala çalışıyor
- **Tailwind ek olarak**: Utility class'ları mevcut stillere eklendi
- **Dark mode**: Yeni özellik (LAB-4 ile geldi)

---

**Proje Durumu**: ✅ Tamamlandı  
**Branch**: Lab_4  
**Tek dosya**: src/index.html  
**Tailwind**: CDN ile entegre
