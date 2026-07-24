document.addEventListener("DOMContentLoaded", () => {
    // 1. Fitur Search / Pencarian Produk Real-Time
    const searchInput = document.getElementById("searchInput");
    const productCards = document.querySelectorAll(".product-card");

    if (searchInput) {
        searchInput.addEventListener("keyup", (e) => {
            const query = e.target.value.toLowerCase().trim();

            productCards.forEach((card) => {
                const title = card.getAttribute("data-title");
                if (title.includes(query)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // 2. Efek Transparansi Navbar saat Di-scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});