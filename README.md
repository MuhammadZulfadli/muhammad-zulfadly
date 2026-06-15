# Muhammad Zulfadli - Personal Portfolio Website

Website portofolio pribadi yang dirancang secara modern dan interaktif untuk menampilkan profil, keahlian (skills), pengalaman kerja (experience), proyek yang pernah dikerjakan (projects), serta formulir kontak (contact) sebagai seorang **Frontend Engineer**.

Website ini mengusung pendekatan desain modern dengan skema warna yang terkurasi, mikro-animasi yang halus, serta tata letak responsif untuk memberikan pengalaman pengguna yang premium.

---

## 🚀 Tech Stack

Project ini dibangun menggunakan teknologi modern berikut:

### Core & Framework
*   **[Vue 3](https://vuejs.org/)** (Composition API & Single File Components) - Library utama untuk membangun antarmuka pengguna yang reaktif dan modular.
*   **[Vue Router](https://router.vuejs.org/)** - Untuk kebutuhan navigasi dan routing halaman web.
*   **[Pinia](https://pinia.vuejs.org/)** - State management library untuk mengelola state aplikasi secara terpusat dan reaktif.

### Styling & Desain
*   **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework untuk pembuatan layout yang cepat, konsisten, dan responsif.
*   **PostCSS & Autoprefixer** - Untuk optimasi file CSS dan memastikan kompatibilitas antar peramban web (cross-browser compatibility).

### Build Tools & Environment
*   **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling untuk proses development server yang super cepat dan build production yang teroptimasi.
*   **Node.js & npm** - Lingkungan runtime JavaScript dan package manager.

---

## 🛠️ Fitur Utama

1.  **Hero Section**: Halaman perkenalan interaktif dengan animasi sticker mengambang (*floating stickers*).
2.  **Skills Section**: Menampilkan tumpukan teknologi (tech stack) dan keahlian teknis yang dikuasai secara visual menarik.
3.  **Experience Section**: Riwayat pengalaman profesional yang disajikan dalam format lini masa (timeline) yang informatif dan bersih.
4.  **Projects Section**: Galeri showcase proyek-proyek unggulan lengkap dengan detail deskripsi, tag teknologi, serta tautan langsung.
5.  **Contact Section**: Area untuk terhubung secara langsung melalui formulir kontak atau media sosial.
6.  **Responsive Design**: Dioptimalkan sepenuhnya untuk berbagai ukuran layar mulai dari ponsel pintar, tablet, hingga layar desktop lebar.

---

## 💻 Cara Menjalankan Project Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer Anda:

### Prasyarat
Pastikan Anda sudah menginstal **Node.js** (versi LTS sangat disarankan) dan **npm** di komputer Anda.

### Langkah-langkah
1.  **Clone Repositori**
    ```bash
    git clone https://github.com/MuhammadZulfadli/muhammad-zulfadly.git
    cd muhammad-zulfadly
    ```

2.  **Instal Dependensi**
    ```bash
    npm install
    ```

3.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```
    Buka peramban (browser) dan akses alamat lokal yang tertera di terminal (biasanya `http://localhost:5173`).

4.  **Build untuk Production**
    Untuk mengompilasi dan mengoptimasi aplikasi agar siap dideploy ke server production:
    ```bash
    npm run build
    ```
    Hasil build akan tersimpan di dalam direktori `dist/`.

5.  **Pratinjau Hasil Build (Preview)**
    Untuk melihat hasil build production secara lokal sebelum dideploy:
    ```bash
    npm run preview
    ```
