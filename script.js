const menuBtn = document.querySelector("#menu");
const navBar = document.querySelector("#nav-bar");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("left-[0]");

  menuBtn.classList.toggle("ri-close-large-line");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("left-[0]");

    menuBtn.classList.toggle("ri-close-large-line");
  });
});

// new Swiper(".swiper", {
//   loop: true,
//   speed: 700,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 2000,
//     disableOnIntraction: false,
//   },

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   grabCursor: true,

//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//     },
//     760: {
//       slidesPerView: 2,
//     },
//     960: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });
