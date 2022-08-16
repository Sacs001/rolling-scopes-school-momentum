// Music Player
import playList from "../playList.js"


let play = document.querySelector(".play");
let playCollection = document.querySelector(".play-list");
let playNext = document.querySelector(".play-next");
let playPrev = document.querySelector(".play-prev");
let isPlay = false;
let playNum = 0;
let audio = new Audio;


function createPlaylist() {     //create playList
    playList.forEach(e => {
        let li = document.createElement("li");
        li.classList.add("play-item");
        li.textContent = e.title;
        playCollection.append(li);
    });
};

function removeAddActiveClass() {      // Убирает активный класс и ставит его на следующий трек
    allFileInPlaylist.forEach(e => {
        e.classList.remove('item-active');
    });
    allFileInPlaylist[playNum].classList.add('item-active');
}

createPlaylist();

let allFileInPlaylist = document.querySelectorAll('.play-item');
let lengthTrack = document.querySelector(".length_track");


// ProgresBar
const progressBar = document.querySelector(".status_bar");

const changeProgress = (status, valueTrack) => {
    let splitValue = valueTrack.split(":");
    let lenthAudio = Number(splitValue[0]) * 60 + Number(splitValue[1]);
    let positionStatusBar = (100 / lenthAudio) * status;
    let currentPaybackMinutes = Math.trunc(status / 60);
    let currentPaybackSeconds = Math.trunc(status - currentPaybackMinutes * 60);
    if (currentPaybackSeconds < 10) {
        currentPaybackSeconds = 0 + String(Math.trunc(status - currentPaybackMinutes * 60))
    };

    progressBar.value = positionStatusBar;
    lengthTrack.textContent = `0${currentPaybackMinutes}:${currentPaybackSeconds} / ${playList[playNum].duration}`;
    return lenthAudio / 100
};


function playAudio() {
    // console.log(audio)
    // if (audio.currentTime !== 0) {
    //     audio.play();
    // } else if (playNum !== 0) {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    removeAddActiveClass();
}


setInterval(() => changeProgress(audio.currentTime, playList[playNum].duration), 1000);

audio.addEventListener('ended', () => {    //автоматическое переключение на следующ трек
    playNextFile();
    playAudio();

});



function stopAudio() {
    audio.pause();
};

play.addEventListener('click', () => {
    play.classList.toggle("pause");
    if (!isPlay) {
        isPlay = true;
        playAudio();

    } else {
        isPlay = false;
        stopAudio();
    }
})

function playNextFile() {
    play.classList.remove("pause");
    isPlay = false;
    playNum++;
    if (playNum == allFileInPlaylist.length) playNum = 0;

    removeAddActiveClass();
}

function playPrevFile() {

    removeAddActiveClass();
    play.classList.remove("pause");
    isPlay = false;
    playNum--
    if (playNum == -1) playNum = (allFileInPlaylist.length - 1);
    removeAddActiveClass();
}

playNext.addEventListener('click', playNextFile);
playPrev.addEventListener('click', playPrevFile);

// StatusBar for player


progressBar.addEventListener('change', () => {

    audio.currentTime = progressBar.value * (changeProgress(audio.currentTime, playList[playNum].duration));
    console.log(progressBar.value * (changeProgress(audio.currentTime, playList[playNum].duration)))
});