const offcanvas = document.querySelector(".offcanvas");
const stickyTop = document.querySelector(".sticky-top");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon");
const audioIcon = document.querySelector(".audio-icon i");
const song = document.querySelector("#song");
let isPlaying = false;

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
  // localStorage.setItem("opened", "true");
  playAudio();
}

function playAudio() {
  song.volume = 0.2;
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove('bi-disc');
    audioIcon.classList.add('bi-pause-circle');
  } else {
    song.play();
    audioIcon.classList.add('bi-disc');
    audioIcon.classList.remove('bi-pause-circle');
  }

  isPlaying = !isPlaying;
}
// if (!localStorage.getItem("opened")) {
//   disableScroll();
// }
disableScroll();

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi kehadiran berhasil terkirim!");
      window.location.href = window.location.origin;
    });
  });
});

// Mendapatkan nama tamu undangan
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama") || 'Bapak/Ibu/Saudara/i';
const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${nama},`;

document.querySelector('#nama').value = nama;