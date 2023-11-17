console.log("Welcome to spotify")

//vaiables

let songIndex = 0;
let audioElemant = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

    masterPlay.classList.add('fa-circle-play');

let songs = [
    {songName: "Dhinka Chika | Ready Feat. Salman Khan, Asin", filePath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "Sia - Unstoppable | Nostalgic For The Present Tour)", filePath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName: "Tere Vaaste | Zara Hatke Zara Bachke", filePath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName: "Sheila Ki Jawani (Lyrics) | Tees Maar Khan", filePath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName: "Lagann Laagii (Studio Version) | Himesh", filePath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName: "Channa Ve h Reshammiya", filePath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName: "Shiddat Title Track | Sunny Kaushal", filePath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName: "Do Ghoont | Nia Sharma | Shruti Rane", filePath: "songs/8.mp3", coverpath: "covers/8.jpg"},
    {songName: "Mann Bharryaa 2.0 – Shershaah | Sidharth", filePath: "songs/9.mp3", coverpath: "covers/9.jpg"},
    {songName: "Mujhe Pyaar Pyaar Hai Feat | Arjun Kapoor", filePath: "songs/10.mp3", coverpath: "covers/10.png"},
]
    

    if(audioElemant.played || masterPlay.classList == 'fa-circle-play'){
        masterPlay.classList.add('fa-circle-pause');

    }

songItems.forEach((element, i ) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElemant.paused || audioElemant.currentTime<=0){
        audioElemant.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } 
    else{
        audioElemant.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

//EVENTS
audioElemant.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElemant.currentTime/audioElemant.duration)*100)
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change', ()=>{
    audioElemant.currentTime = myProgressBar.value * audioElemant.duration/100;

})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')

    })
}
masterSongName.innerText = "Dhinka Chika | Ready Feat. Salman Khan, Asin"
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElemant.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElemant.currentTime = 0;
        audioElemant.play();
        gif.style.opacity = 1;
        element.classList.remove('fa-circle-play')
        element.classList.add('fa-circle-pause')
        if(audioElemant.played || masterPlay.classList == 'fa-circle-play'){
            masterPlay.classList.add('fa-circle-pause');
    
        }
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElemant.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElemant.currentTime = 0;
    audioElemant.play();
    gif.style.opacity = 1;
    element.classList.remove('fa-circle-play')
    element.classList.add('fa-circle-pause')
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElemant.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElemant.currentTime = 0;
    audioElemant.play();
    gif.style.opacity = 1;
    element.classList.remove('fa-circle-play')
    element.classList.add('fa-circle-pause')
})


// VOLUME SLIDER