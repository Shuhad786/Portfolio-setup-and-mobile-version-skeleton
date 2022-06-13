const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener ("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
