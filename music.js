let songName = document.querySelector("marquee");
let songImage = document.querySelector("img");
let songDurationBtn = document.querySelectorAll("input")[0];
let songVolumeBtn = document.querySelectorAll("input")[1];
let audio = document.querySelector("audio");
let previousBtn = document.querySelector(".fa-backward");
let pauseBtn = document.querySelector(".fa-pause");
let playBtn = document.querySelector(".fa-play");
let nextBtn = document.querySelector(".fa-forward");
let favBtn = document.querySelector(".fa-heart");

let storage = [
            {   name:"Palang Sangwan",
                imgSrc:"./images/img1.jpg",
                songSrc:"./audio/audio1.mp3"
            },
            {
                name:"Apna Bana le",
                imgSrc:"./images/img2.jpg",
                songSrc:"./audio/audio2.mp3"
            },
            {
                name:"Lollipop",
                imgSrc:"./images/img1.jpg",
                songSrc:"./audio/audio3.mp3"
            },
            {
                name:"Kesariya",
                imgSrc:"./images/img2.jpg",
                songSrc:"./audio/audio4.mp3"
            },
            {
                name:"Munni Badnaam hui",
                imgSrc:"./images/img1.jpg",
                songSrc:"./audio/audio5.mp3"
            },
        ];

pauseBtn.style.display = "none";
let index = 0;
let realTime = 0;

function playSong(){
    songName.innerHTML = storage[index].name;
    songImage.src = storage[index].imgSrc;
    audio.src = storage[index].songSrc;
    audio.currentTime = realTime;
    audio.play();
    pauseBtn.style.display = "block";
    playBtn.style.display = "none";
    setInterval(()=>{
songDurationBtn.value=(audio.currentTime/audio.duration)*100;
    },1000)
}

playBtn.addEventListener("click",playSong);
pauseBtn.addEventListener("click",()=>{
    audio.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
    realTime = audio.currentTime;
})

nextBtn.addEventListener("click",()=>{
    index = (index + 1) % storage.length;
    realTime = 0;
    playSong();
})

previousBtn.addEventListener("click",()=>{
    index = (index - 1 + storage.length) % storage.length;
    realTime = 0;
    playSong();
})
songVolumeBtn .addEventListener("input",()=>{
    console.log(songVolumeBtn.value );
    audio.volume=songVolumeBtn.value/100;
})


songDurationBtn.addEventListener("input",()=>{
    realTime=songDurationBtn.value;
    audio.currentTime=songDurationBtn.value*audio.duration/100;
})

a.addEventListener("ended",()=>{
    index = (index - 1 + storage.length) % storage.length;
    realTime = 0;
    playSong();
})