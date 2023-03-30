const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thank-you");
const submit = document.getElementById("submit");
const home = document.querySelector(".home-btn");
const rates = document.querySelectorAll(".button");
const rate = document.getElementById("number");



submit.addEventListener( "click", () => {
    thanks.classList.remove("hidden");
    rating.style.display = "none";
})

home.addEventListener( "click", () => {
    thanks.classList.add("hidden");
    rating.style.display = "block";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        number.innerHTML = rate.innerHTML
    })
})

