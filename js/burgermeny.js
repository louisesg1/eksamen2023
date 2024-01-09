const burgermeny = document.querySelector(".burgermeny");
const nav = document.querySelector("nav");
const headerul = document.querySelector(".headerul");
const links = document.querySelectorAll(".headerul li a");

burgermeny.addEventListener("click", () => {
  burgermeny.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burgermeny.classList.remove("active");
    nav.classList.remove("active");
  });
});
