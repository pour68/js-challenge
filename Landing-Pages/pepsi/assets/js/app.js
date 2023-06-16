const heroThumbnailImgs = document.querySelectorAll(".hero__thumbnails img");
const heroImg = document.querySelector(".hero__img");
const header = document.querySelector("#header");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const navToggle = document.querySelector(".nav__toggle");

heroThumbnailImgs.forEach(heroThumbnailImg => {
    heroThumbnailImg.addEventListener("click", (e) => {
        document.body.className = e.target.dataset.bgColor;
        nav.className = `nav container ${e.target.dataset.bgColor}`;
        navList.className = `nav__list ${e.target.dataset.bgColor}`;
        heroImg.src = e.target.src;
    });
});

navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});
