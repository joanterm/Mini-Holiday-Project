const revealBtn = document.getElementById("reveal-btn")
const resetBtn = document.getElementById("reset")
const displayArea = document.getElementById("display-area")
const revealedArea = document.getElementById("revealed-area")
const imageArea = document.getElementById("image-area")
const revealedMsg = document.getElementById("revealed-msg")
const numOfImages = 4;


//HIDES DISPLAY AREA, REVEALS REVEALED AREA, PLAYS THE GAME FUNCTION
revealBtn.addEventListener("click", function() {
    displayArea.style.display = "none"
    revealedArea.style.display = "block"
    generateRandomImg()
})


//THIS FUNCTION WILL TRIGGER RANDOM IMAGES
function generateRandomImg() {
    let randomImg = Math.floor(Math.random() * numOfImages) +1//CREATES RANDOM RESPONSE BETWEEN 0-4 INCLUSIVE
    if (randomImg === 1) {
        imageArea.src = "Images/Santa_Img.png"
        revealedMsg.textContent = "You get a visit from Santa!"
    }
    else if (randomImg === 2) {
        imageArea.src = "Images/Hot_Drink_Img.png"
        revealedMsg.textContent = "You get a hot cocoa!"
    }
    else if (randomImg === 3) {
        imageArea.src = "Images/Christmas_Tree_Img.png"
        revealedMsg.textContent = "You get your own Holiday Tree!"
    }
    else if (randomImg === 4) {
        imageArea.src = "Images/Snow_Games_Img.png"
        revealedMsg.textContent = "You get to play in the snow!"
    }   
}

//RESETS THE GAME
resetBtn.addEventListener("click", function() {
    revealedArea.style.display = "none"
    displayArea.style.display = "block"
})
