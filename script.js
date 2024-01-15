const toggle = document.querySelector(".toggle");
const el = document.querySelector(".element-toggle");

toggle.addEventListener("click", () => {
  el.classList.toggle("element");
});
