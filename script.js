const toggle = document.getElementById('toggleDark');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Simpan preferensi di localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Saat halaman dimuat, cek preferensi
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
