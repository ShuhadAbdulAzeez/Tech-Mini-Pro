
// Background  Slider//

let slides = document.querySelectorAll('.slide-contai');
let index = 0;

/**next function**/
function next(){
    slides[index].classList.remove('active');
    index = (index + 1)% slides.length;
    slides[index].classList.add('active');
}

/**prev function**/

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length)% slides.length;
    slides[index].classList.add('active');
} 

/**autoplay**/

setInterval(next, 7000); //slides changes every 7seconds

/************************************************************/ 

// feedback review//

let userTexts = document.getElementsByClassName("usertext");
let userPics = document.getElementsByClassName("user-pic")

function showReview(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic")
    }

    for(userText of userTexts){
        userText.classList.remove("active-text")
    }

    let i = Array.from(userPics).indexOf(event.target)

    userPics[i].classList.add("active-pic")
    userTexts[i].classList.add("active-text")
}
