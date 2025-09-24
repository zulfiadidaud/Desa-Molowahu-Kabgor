// Menunggu sampai seluruh halaman web selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Ambil elemen tombol hamburger dari HTML
    const menuToggle = document.getElementById('menu-toggle');
    
    // Ambil elemen navigasi dari HTML
    const nav = document.getElementById('main-nav');

    // Cek apakah kedua elemen tersebut ada
    if (menuToggle && nav) {
        // Tambahkan 'event listener' (pendengar aksi) pada tombol hamburger
        // Jika tombol di-klik, jalankan fungsi berikut:
        menuToggle.addEventListener('click', function() {
            // Tambah/Hapus class 'menu-active' pada navigasi.
            // 'toggle' artinya: jika class belum ada, tambahkan. jika sudah ada, hapus.
            // Ini membuat tombol bisa berfungsi untuk membuka dan menutup menu.
            nav.classList.toggle('menu-active');
        });
    }

});