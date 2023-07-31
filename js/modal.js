const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".button-open");
const closeModalBtn = document.querySelector(".close-button");
const openModal = function () {
  modal.classList.remove("is-hidden");
  overlay.classList.remove("is-hidden");
};
openModalBtn.addEventListener("click", data-modalopen );
const closeModal = function () {
  modal.classList.add("is-hidden");
  overlay.classList.add("is-hidden");
};
closeModalBtn.addEventListener("click", closeModal);