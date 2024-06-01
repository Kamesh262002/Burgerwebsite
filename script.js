const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i")


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
}
);

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class" , "ri-menu-line")
});

const scrollReveal = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollReveal,
    origin: "right",
});

ScrollReveal().reveal(".header_content h2", {
    ...scrollReveal,
    delay:500,
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollReveal,
    delay:1000,
});

ScrollReveal().reveal(".order_card", {
    ...scrollReveal,
    interval: 500,
});


ScrollReveal().reveal(".event_content", {
    duration: 1000,
});