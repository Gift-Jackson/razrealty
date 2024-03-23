const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelectorAll(".close-btn");
const overlay = document.querySelector(".overlay");
const submitBtn = document.querySelector(".submitBtn");

closeBtn.forEach((closeModal) => {
    closeModal.addEventListener("click", () => {
        overlay.style.display = "none";
    });
})

openBtn.addEventListener("click", () => {
    window.open("../fee.html");
})

//Code to update the footer year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

submitBtn.addEventListener('click', (event) => {
    submitBtn.textContent = 'Loading...';

    setTimeout(() => {
        submitBtn.textContent = 'Submit Application';
    }, 10000)

    
})
