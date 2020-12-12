const revealBtn = document.getElementById("reveal-btn")
const displayArea = document.getElementById("display-area")
const revealedArea = document.getElementById("revealed-area")
const imageArea = document.getElementById("image-area")
const giftOne = "undraw_santa_visit_loux.png"



revealBtn.addEventListener("click", function() {
    displayArea.style.display = "none"
    revealedArea.style.display = "block"
    imageArea.src = giftOne
})