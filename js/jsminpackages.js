const nav = document.querySelector(".nav"),
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
    rootMargin: "300px",
  });
headerObserver.observe(header);
const hoverHandler = function (e, t) {
  if (e.target.classList.contains("nav_link")) {
    const t = e.target;
    t.closest(".nav")
      .querySelectorAll(".nav_link")
      .forEach((e) => {
        e !== t && (e.style.filter = `blur(${this}px)`);
      });
  }
};
nav.addEventListener("mouseover", hoverHandler.bind(1)),
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
const packagesContainer = document.querySelector(".toogle-container_csomagok"),
  buttons = document.querySelectorAll("button");
packagesContainer.addEventListener("click", (e) => {
  const t = e.target.closest("button");
  t &&
    (buttons.forEach((e) => e.classList.remove("tg-bg")),
    t.classList.add("tg-bg"),
    "1" === e.target.dataset.id
      ? ((document.querySelector(".p-landing").textContent = "299 000 ft"),
        (document.querySelector(".p-creative").textContent = "399 000 ft"),
        (document.querySelector(".p-extra").textContent = "Árajánlat"),
        document
          .querySelectorAll(".fc-tech")
          .forEach((e) => (e.textContent = "Egyedi fejlesztés")),
        document
          .querySelectorAll(".for-toogle-1")
          .forEach((e) => e.classList.remove("hidden-reszletek")),
        document
          .querySelectorAll(".for-toogle")
          .forEach((e) => e.classList.add("hidden-reszletek")))
      : ((document.querySelector(".p-landing").textContent = "149 000 ft"),
        (document.querySelector(".p-creative").textContent = "249 000 ft"),
        (document.querySelector(".p-extra").textContent = "-"),
        document
          .querySelectorAll(".for-toogle")
          .forEach((e) => e.classList.remove("hidden-reszletek")),
        document
          .querySelectorAll(".for-toogle-1")
          .forEach((e) => e.classList.add("hidden-reszletek")),
        document
          .querySelectorAll(".fc-tech")
          .forEach((e) => (e.textContent = "WordPress"))));
});

grecaptcha.ready(function () {
  grecaptcha
    .execute("6LfA69YjAAAAABRkLoCxfl_r0JeVMTBD4WDjSnag", { action: "homepage" })
    .then(function (e) {
      document.getElementById("captchaResponse").value = e;
    });
});
