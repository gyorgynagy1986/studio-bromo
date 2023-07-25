const sr = ScrollReveal({
  origin: "top",
  distance: "10px",
  duration: 2e3,
  delay: 200,
});
sr.reveal(".header_title", { opacity: 0, origin: "top", distance: "50px" }),
  sr.reveal(".header_main-text-container", {
    delay: 650,
    origin: "top",
    distance: "0px",
  }),
  sr.reveal(".header_main-services-box-h4", {
    duration: 1700,
    origin: "top",
    distance: "15px",
  }),
  sr.reveal(".btnUp", {
    duration: 2e3,
    delay: 100,
    opacity: 1,
    origin: "top",
    distance: "15px",
  }),
  window.matchMedia("(min-width: 1034px)").matches &&
    (sr.reveal(".works_contanier_content-box", {
      duration: 1250,
      delay: 50,
      opacity: 1,
      origin: "left",
      distance: "150px",
    }),
    sr.reveal(".works_contanier-photo", {
      duration: 1250,
      delay: 50,
      opacity: 1,
      origin: "right",
      distance: "300px",
    })),
  window.matchMedia("(max-width: 1034px)").matches &&
    sr.reveal(".works_contanier_content-box", {
      duration: 1e3,
      opacity: 0,
      origin: "top",
      distance: "0",
    }),
  window.matchMedia("(min-width: 819px)").matches &&
    (sr.reveal(".ef1", {
      duration: 1500,
      opacity: 0,
      origin: "left",
      distance: "50px",
    }),
    sr.reveal(".ef2", {
      duration: 1500,
      opacity: 0,
      origin: "right",
      distance: "50px",
    }),
    sr.reveal(".ef3", {
      duration: 1500,
      opacity: 0,
      origin: "right",
      distance: "0px",
    })),
  window.matchMedia("(max-width: 818px)").matches &&
    (sr.reveal(".text-left1", {
      duration: 1e3,
      delay: 100,
      opacity: 0,
      origin: "top",
      distance: "10px",
    }),
    sr.reveal(".text-left2", {
      duration: 1e3,
      delay: 100,
      opacity: 0,
      origin: "top",
      distance: "10px",
    }),
    sr.reveal(".text-left3", {
      duration: 1e3,
      delay: 100,
      opacity: 0,
      origin: "top",
      distance: "10px",
    }),
    sr.reveal(".text-left4", {
      duration: 1e3,
      delay: 100,
      opacity: 0,
      origin: "top",
      distance: "10px",
    }),
    sr.reveal(".text-left5", {
      duration: 1e3,
      delay: 100,
      opacity: 0,
      origin: "top",
      distance: "10px",
    }));
const effectPrefix = document.getElementById("effect-prefix");
function check(e = !0) {
  document.querySelectorAll(".mobilenav_checkbox").forEach((t) => {
    t.checked = e;
  });
}
function uncheckAll() {
  check(!1);
}
setTimeout(() => {
  effectPrefix.style.opacity = "1";
}, 10);
const btn = document.querySelectorAll(".mobilenav_link");
btn.forEach((e) => {
  e.addEventListener("click", uncheckAll);
});
const sectionWorks = document.querySelector(".works"),
  nav = document.querySelector(".nav"),
  header = document.querySelector(".header"),
  stickyNav = function (e) {
    const [t] = e;
    t.isIntersecting
      ? (nav.classList.remove("sticky"), nav.classList.remove("slide-in-top"))
      : (nav.classList.add("sticky"), nav.classList.add("slide-in-top"));
  },
  headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  });
headerObserver.observe(header);
const hoverHandler = function (e) {
  if (e.target.classList.contains("nav_link")) {
    const t = e.target;
    t.closest(".nav")
      .querySelectorAll(".nav_link")
      .forEach((e) => {
        e !== t && (e.style.filter = `blur(${this}px)`);
      });
  }
};
nav.addEventListener("mouseover", hoverHandler.bind(0)),
  nav.addEventListener("mouseout", hoverHandler.bind(0));
const message = document.createElement("div");
function cookieHandvet() {
  localStorage.getItem("Cookie") ||
    (message.classList.add("cookie-message"),
    (message.innerHTML =
      '<div class="cookie-container">Kedves Látogató 😊 Weboldalunk alapértelmezés szerint sütiket 🍪🍪 használ elemzési célokra. <a href="/sutik.html">Látogass el ide ha többet szeretnél tudni erről, illetve ha információra van szükséged a kikapcsolásukhoz.</a></div><button class="btn-cookie btn--close--cookie">bezár</button>'),
    header.append(message),
    document
      .querySelector(".btn--close--cookie")
      ?.addEventListener("click", () => {
        localStorage.setItem("Cookie", "Cookie Accepted"), message.remove();
      }));
}
setTimeout(cookieHandvet, 3e3);
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 130,
  loop: !1,
  pagination: { el: ".swiper-pagination", clickable: !0 },
  navigation: { nextEl: ".swiper-button-left", prevEl: ".swiper-button-right" },
});





