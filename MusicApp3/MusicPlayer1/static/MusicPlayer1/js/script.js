const play = document.getElementById('play')
/* const pause = document.getElementById('stop') */
const music = document.querySelector('audio')
const loop = document.querySelector("loop")
const img = document.getElementById("musicImg")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const artist = document.getElementById("artist")
const title = document.getElementById("title")




play.addEventListener('click',()=>{
    if (music.paused){
        music.play()
        play.classList.replace("fa-music","fa-pause")
        img.classList.add('anime')
    }else{
        music.pause()
        play.classList.replace("fa-pause","fa-music")
        img.classList.remove('anime')
    }
})

/*                 function Loop(){
    music.loop = false
    music.load()
}

loop.addEventListener('click',()=>{
    if(Loop){
        music.loop = true
        music.load()
        play.classList.replace("fa-play","fa-backward")
    }else{
        music.loop = false
        music.load()
    }
})
*/
const songs = [
    {
        name: "GirlsLikeYou",
        title: "GirlsLikeYou",
        artist: "Maroon 5",
    },
    {
        name: "Scam1992",
        title: "Scam1992",
        artist: "Bjjs",
    },
    {
        name: "Villain",
        title: "Darkness",
        artist: "Heart of Darkness",
    },
]

const LoadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/"+songs.name+".mp3";
    img.src = "images/"+songs.name+".PNG";
}

/* LoadSongs(songs[1]); */
songIndex = 0
const nextSong = () =>{
    songIndex = (songIndex+1) % songs.length;
    LoadSongs(songs[songIndex])
    music.play()
}

const prevSong = () =>{
    songIndex = (songIndex-1+songs.length) % songs.length;
    LoadSongs(songs[songIndex])
    music.play()
}



next.addEventListener('click',nextSong)
prev.addEventListener('click',prevSong)

/* 
pause.addEventListener('click',()=>{
    music.pause()
}) */