const myModal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
    myModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    myModal.style.display = "none";
});