// toggle class active hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// toggle class active search form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

<script>
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const menu = document.getElementById("menu").value;
    const jumlah = document.getElementById("jumlah").value;
    const catatan = document.getElementById("catatan").value;

    const nomor = "6285336021102";

    const pesan =
        `Halo Srawung-Dulur, saya ingin memesan.%0A%0A` +
        `Nama: ${nama}%0A` +
        `Menu: ${menu}%0A` +
        `Jumlah: ${jumlah}%0A` +
        `Catatan: ${catatan || "-"}`;

    window.open(`https://wa.me/${"6285336021102"}?text=${pesan}`, "_blank");
});
</script>