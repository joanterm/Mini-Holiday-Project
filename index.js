const revealBtn = document.getElementById("reveal-btn")
const displayArea = document.getElementById("display-area")
const revealedArea = document.getElementById("revealed-area")
const imageArea = document.getElementById("image-area")
const numOfImages = 4;




revealBtn.addEventListener("click", function() {
    displayArea.style.display = "none"
    revealedArea.style.display = "block"
    // imageOne.src = openGiftOne
    // imageTwo.src = openGiftTwo
    generateRandomImg()
})

function generateRandomImg() {
    let randomImg = Math.floor(Math.random() * numOfImages) +1
    if (randomImg === 1) {
        imageArea.src = "Images/Santa_Img.png"//giftOne
    }
    else if (randomImg === 2) {
        imageArea.src = "Images/Hot_Drink_Img.png" //giftTwo
    }
    else if (randomImg === 3) {
        imageArea.src = "Images/Christmas_Tree_Img.png"
    }
    else if (randomImg === 4) {
        imageArea.src = "Images/Snow_Globe_Img.png"
    }   
}
// generateRandomImg()
