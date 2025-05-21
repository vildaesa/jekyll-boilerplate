# Simply Marketplace


| Komponen   | Teknologi                 |
| ---------- | ------------------------- |
| Frontend   | Jekyll (static site)      |
| Auth & DB  | Firebase Auth + Firestore |
| Hosting    | Firebase Hosting          |
| Gambar     | Firebase Storage          |
| Pembayaran | Manual dulu / Midtrans    |
| Komisi     | Dicatat di Firestore      |


## 🗂️ Struktur Folder Proyek

```pgsql
marketplace-jekyll-firebase/
├── _includes/
│   └── header.html
│   └── footer.html
├── _layouts/
│   └── default.html
├── assets/
│   └── js/
│       └── firebase-config.js
│       └── auth.js
│       └── products.js
│   └── css/
│       └── style.css
├── _posts/                         # (optional untuk blog/info)
├── pages/
│   └── login.html
│   └── register.html
│   └── dashboard.html             # Penjual
│   └── admin.html                 # Admin (sementara statik)
│   └── add-product.html
│   └── product.html               # Template produk detail
├── index.html                     # Landing page + list produk
├── 404.html
├── .firebaserc
├── firebase.json
├── _config.yml
└── README.md
```

## 📄 Contoh Isi File Penting
assets/js/firebase-config.js

```js
// Ganti ini dengan config Firebase milikmu
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
```

## 📌 Fitur Dasar Disiapkan

| Halaman            | Fitur                                      |
| ------------------ | ------------------------------------------ |
| `index.html`       | Tampilkan produk publik                    |
| `login.html`       | Login Firebase Auth                        |
| `register.html`    | Register Firebase Auth                     |
| `add-product.html` | Tambah produk ke Firestore                 |
| `dashboard.html`   | List produk milik penjual (auth user)      |
| `admin.html`       | Sederhana dulu: list semua produk + komisi |


## 📦 Fitur Minimum
* Untuk Pengunjung

    Lihat daftar produk

    Lihat detail produk

    Kontak penjual / tombol “Beli” (via WA / form)

* Untuk Penjual

    Register & login (Firebase Auth)

    Tambah produk (nama, deskripsi, harga, gambar)

    Dashboard pribadi (produk saya, penjualan saya)

* Untuk Admin

    Lihat data penjual dan produk

    Pantau komisi tiap penjualan

## 💰 Sistem Komisi (Sederhana Dulu)

Setiap produk bisa punya field:
```json
{
  "harga": 100000,
  "komisi_admin": 10000
}
```

## ⚙️ Alur Kerja

    🔐 Login/Register → Firebase Auth

    🛍️ Tambah Produk → Form Jekyll + Firebase SDK

    🧾 List Produk → Query Firestore via JS

    💬 Beli Produk → Kirim ke WA / link Midtrans

    📊 Admin Panel (Jekyll admin page + Firebase query)


## 🎯 Rencana Next Step

    ✅ Buat template Jekyll awal (landing page + login/register)

    ✅ Setup Firebase project + Auth + Firestore

    ✅ Tambahkan fitur tambah produk

    ✅ Buat list produk publik

    ✅ Tambah fitur beli (kontak penjual / link WA)

    ✅ Hitung komisi admin

    🔐 Buat dashboard penjual & admin
