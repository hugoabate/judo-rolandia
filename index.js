const btnCarrossel = document.querySelectorAll(".btn");
const imgs = document.querySelectorAll(".img");
const txt = document.querySelectorAll(".description");
const elements = document.querySelectorAll(".actv");

btnCarrossel.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    desactiveBtnSelected();

    selectBtnCarrosel(btn);

    hideImgActive();

    hideText();

    showImgDeBg(index);

    showTextDe(index);
  });
});

function showImgDeBg(index) {
  imgs[index].classList.add("active");
}

function showTextDe(index) {
  txt.forEach((t, i) => {
    if (i === index) {
      t.classList.add("actv");
    } else {
      t.classList.remove("actv");
    }
  });
}

function selectBtnCarrosel(btn) {
  btn.classList.add("selected");
}

function hideImgActive() {
  const imgActive = document.querySelector(".active");
  imgActive.classList.remove("active");
}

function hideText() {
  const activeText = document.querySelector(".actv");
  activeText.classList.remove("actv");
}

function desactiveBtnSelected() {
  const btnSelected = document.querySelector(".selected");
  btnSelected.classList.remove("selected");
}
