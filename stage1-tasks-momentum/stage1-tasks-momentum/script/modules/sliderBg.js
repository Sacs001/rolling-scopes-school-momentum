// Slider

let slidePrev = document.querySelector(".slide-prev");
let slideNext = document.querySelector(".slide-next");

let bodyPicture = document.body;



function getRandomInt(max) {
    let result = String(Math.floor(Math.random() * max));
    if (result == 0) result = 1;
    return result
}

let num = getRandomInt(20);


function setBg(numPicture) {
    numPicture = String(numPicture);
    if (numPicture.length == 1) {
        numPicture = '0' + numPicture;
    };
    let img = new Image;
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${numPicture}.jpg`;
    img.addEventListener('load', () => {
        document.body.style.backgroundImage = `url("${img.src}")`;
    })
}
setBg(num)


slidePrev.addEventListener('click', () => {
    if (num == '01') {
        num = '20';
        setBg(num);
    } else {
        num--
        setBg(num)
    }
})

slideNext.addEventListener('click', () => {
    if (num == '20') {
        num = '01';
        setBg(num);
    } else {
        num++
        setBg(num)
    }
})
