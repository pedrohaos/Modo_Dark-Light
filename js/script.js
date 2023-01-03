const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .fa-sun");
const moonIcon = document.querySelector(".toggle .fa-moon");

toggle.addEventListener("change", ()=>{
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "fa-solid fa-sun" ? "fa-regular fa-sun" : "fa-solid fa-sun";
    moonIcon.className = moonIcon.className == "fa-solid fa-moon" ? "fa-regular fa-moon" : "fa-solid fa-moon";
});