const offcanvas = document.querySelector(".offcanvas");
const stickyTop = document.querySelector(".sticky-top");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

const rootElement = document.querySelector(":root");

function disableScroll() {
  const scrollY = window.pageYOffset || document.documentElement.scrollY;
  const scrollX = window.pageXOffset || document.documentElement.scrollX;

  window.onscroll = function () {
    window.scrollTo(scrollY, scrollX);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  localStorage.setItem("opened", "true");
}
if (!localStorage.getItem("opened")) {
  disableScroll();
}


window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Konfirmasi kehadiran berhasil terkirim!");
      window.location.href = window.location.origin;
    })
  });
});