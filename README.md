# Mebelku - Website Toko Online Mebel

Website toko online mebel dengan tema hitam putih minimalis dan modern, dibangun menggunakan React dan Tailwind CSS.

## Fitur

- **Design Minimalis Modern**: Tema hitam putih dengan desain clean dan elegan
- **Responsive**: Optimal di desktop dan mobile
- **Integrasi WhatsApp**: Semua tombol mengarah ke chat WhatsApp admin
- **Animasi Hover**: Efek hover halus pada elemen interaktif
- **Carousel Testimoni**: Testimoni pelanggan dengan navigasi otomatis
- **Grid Produk**: Tampilan produk dalam grid responsif
- **Kategori Produk**: Hover effect dari grayscale ke full color

## Struktur Halaman

1. **Header**: Logo "Mebelku.", navigasi menu, tombol WhatsApp
2. **Hero Section**: Banner besar dengan CTA utama
3. **Kategori Produk**: 3 kategori (Kursi, Meja, Lemari) dengan hover effect
4. **Daftar Produk**: Grid produk dengan tombol WhatsApp per item
5. **Tentang Kami**: Informasi perusahaan dengan statistik
6. **Testimoni**: Carousel testimoni pelanggan
7. **Footer**: Kontak, sosial media, dan informasi perusahaan

## Teknologi

- React 18
- Tailwind CSS 3
- HTML5
- CSS3
- JavaScript ES6+

## Instalasi

1. Clone atau download proyek ini
2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm start
   ```

4. Buka browser dan akses `http://localhost:3000`

## Build untuk Production

```bash
npm run build
```

## Konfigurasi WhatsApp

Untuk mengubah nomor WhatsApp admin, edit file-file komponen dan ganti nilai `whatsappNumber`:

```javascript
const whatsappNumber = '6281234567890'; // Ganti dengan nomor admin
```

## Warna Tema

- **Putih**: #FFFFFF
- **Hitam**: #000000
- **Abu-abu Terang**: #F5F5F5
- **Abu-abu Medium**: #E0E0E0
- **Hijau WhatsApp**: #25D366

## Font

Menggunakan font Poppins dari Google Fonts untuk tampilan modern dan clean.

## Responsivitas

Website sudah dioptimalkan untuk:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Lisensi

Proyek ini dibuat untuk keperluan komersial. Silakan sesuaikan sesuai kebutuhan.
