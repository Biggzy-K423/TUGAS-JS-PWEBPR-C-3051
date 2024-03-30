const tulisan = document.getElementById('judul');
const cont = document.getElementById('container');
const card = document.getElementById('kotak1');
const img = document.getElementById('gambar');
const text = document.getElementById('teks');
const btn = document.getElementById('btn');
const iya = document.getElementById('green');
const tidak = document.getElementById('red');

iya.addEventListener('click', e => {
    tulisan.innerHTML = 'Anda Berbohong!';
    text.innerHTML = 'Anda adalah seorang Teknisi'
    card.style.backgroundColor = "#E12E2E";
    btn.style.display = "none"
    img.src = "image 3.png"
});

tidak.addEventListener('click', e => {
    tulisan.innerHTML = 'Anda Benar!';
    text.innerHTML = 'Anda adalah seorang Mahasiswa'
    card.style.backgroundColor = "#6FD240";
    btn.style.display = "none"
    img.src = "image 2.png"
});