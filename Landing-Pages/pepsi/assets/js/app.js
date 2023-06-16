const heroThumbnailImgs = document.querySelectorAll(".hero__thumbnails img");
const heroImg = document.querySelector(".hero__img");
const header = document.querySelector("#header");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const navToggle = document.querySelector(".nav__toggle");
const navIcon = document.querySelector(".nav__icon");

heroThumbnailImgs.forEach(heroThumbnailImg => {
    heroThumbnailImg.addEventListener("click", (e) => {
        document.body.className = e.target.dataset.bgColor;
        nav.className = `nav container ${e.target.dataset.bgColor}`;
        navList.className = `nav__list ${e.target.dataset.bgColor} ${navList.classList.contains("active") && "active"}`;
        heroImg.src = e.target.src;
    });
});

navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");

    if (navIcon.classList.contains("ri-menu-line")) {
        navIcon.className = "ri-close-line nav__icon";
    } else {
        navIcon.className = "ri-menu-line nav__icon";
    }
});
