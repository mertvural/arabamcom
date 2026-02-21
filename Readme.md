# 🚗 Arabam.com Frontend

Vue 3 ile geliştirilmiş, ilan listeleme ve detay sayfaları sunan modern bir frontend uygulaması.

## ✨ Özellikler

- **İlan listesi** — Filtreler, sıralama ve sayfa boyutu seçenekleri
- **İlan detayı** — Tek ilan görüntüleme ve bilgi sayfası
- **Responsive arayüz** — PrimeVue ve Tailwind CSS ile tutarlı tasarım
- **State yönetimi** — Pinia ile merkezi store (liste, detay, global)
- **Türkçe arayüz** — Hazır dil yapısı (Language enum)
- **Hata yönetimi** — Toast bildirimleri ve global loading durumu

## 🛠 Teknoloji Stack

| Kategori  | Teknoloji               |
| --------- | ----------------------- |
| Framework | Vue 3 (Composition API) |
| Build     | Vite 7                  |
| Dil       | TypeScript              |
| State     | Pinia                   |
| Routing   | Vue Router 4            |
| UI        | PrimeVue 4, PrimeIcons  |
| Stil      | Tailwind CSS 4, SASS    |
| HTTP      | Axios                   |
| Lint      | ESLint                  |

## 📁 Proje Yapısı

```
src/
├── components/          # Ortak bileşenler (Footer, Loading)
├── features/
│   ├── lists/          # İlan listesi: API, store, filtreler, kartlar
│   └── details/        # İlan detayı: API, store, detay bileşeni
├── languages/          # Dil sabitleri (en.ts)
├── router/             # Vue Router tanımları
├── services/api/       # Axios HTTP client
├── store/              # Global store (loading, error)
├── types/              # Genel TypeScript tipleri
└── App.vue
```

## 🚀 Kurulum

### Gereksinimler

- **Node.js** `^20.19.0` veya `>=22.12.0`
- **npm** (veya yarn/pnpm)

### Adımlar

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/<kullanici>/arabamcom.git
   cd arabamcom
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
   Uygulama varsayılan olarak `http://localhost:5173` adresinde açılır.

### Ortam Değişkenleri

API base URL için `.env` dosyasında `VITE_API_URL` tanımlayın. Örnek:

```
VITE_API_URL=https://sandbox.arabamd.com/api/v1
```

## 📜 Scriptler

| Komut             | Açıklama                 |
| ----------------- | ------------------------ |
| `npm run dev`     | ESLint + Vite dev server |
| `npm run build`   | Production build         |
| `npm run preview` | Build çıktısını önizleme |
| `npm run lint`    | ESLint çalıştırma        |

## 🧭 Rotalar

| Rota           | Açıklama           |
| -------------- | ------------------ |
| `/`            | İlan listesi       |
| `/listing/:id` | İlan detay sayfası |

## 🧩 IDE Önerisi

- **VS Code** + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Vetur’u devre dışı bırakın)
- Tarayıcı: [Vue.js devtools](https://devtools.vuejs.org/) eklentisi

## 📄 Lisans

Bu proje private olarak yönetilmektedir.

---

_Vue 3 + Vite ile geliştirilmiştir._
