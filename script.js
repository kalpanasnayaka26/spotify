console.log("welcome to spotify");

//initialize the variables
let songIndex=0; 
let audioElement=new Audio("songs/letmeloveu.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName:"let-me-love-u",filePath:"songs/letmeloveu.mp3",coverPath:"image.jpg"},
    {songName:"jagave-neenu",filePath:"songs/jagaveneenu.mp3",coverPath:"image.jpg"},
    {songName:"akira",filePath:"songs/akira.mp3",coverPath:"image.jpg"},
    {songName:"belakina-kavithe",filePath:"song/belakina.mp3",coverPath:"image.jpg"},
    {songName:"singara-siriye",filePath:"songs/kanthara.mp3",coverPath:"image.jpg"},
    {songName:"galipata",filePath:"songs/galipata.mp3",coverPath:"image.jpg"},

]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});




//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    //uptade seekbar
    Progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=Progress
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgressBar.value * audioElement.duration)/100);
})
const makeAllPlays 
= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;

    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

