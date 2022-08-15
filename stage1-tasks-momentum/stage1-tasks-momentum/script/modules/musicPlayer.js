// Music Player

import playList from "./playList.js"


let play = document.querySelector(".play");
let playCollection = document.querySelector(".play-list");
let playNext = document.querySelector(".play-next");
let playPrev = document.querySelector(".play-prev");
let isPlay = false;
let playNum = 0;
let audio = new Audio;

function createPlaylist() {
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

function playAudio() {
    audio.src = playList[playNum].src;
    audio.currentTime = 35;
    audio.play();
    removeAddActiveClass();

    audio.addEventListener('ended', () => {    //автоматическое переключение на следующ трек
        playNextFile();
        playAudio();
    });
};


function stopAudio() {
    audio.pause()
};

play.addEventListener('click', () => {
    play.classList.toggle("pause");
    if (!isPlay) {
        console.log('done');
        isPlay = true;
        playAudio();

    } else {
        console.log('not done');
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

    playNum--
    if (playNum == -1) playNum = (allFileInPlaylist.length - 1);
    removeAddActiveClass()
}

playNext.addEventListener('click', playNextFile)
playPrev.addEventListener('click', playPrevFile)