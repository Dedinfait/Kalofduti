const video = document.getElementById("MyVideo");
const btnPLay = document.getElementById("play");
const btnMute = document.getElementById('mute');
const playlist = ["video1" ,"video2", "video3"];
const PlayTitle = ["Мем", "Мем с Вививилкой и джоди", "Тип спас"];
const PlayText = ["А что описывать посмотри видео", "Я не шипер", "Тип love"];

const videoTitle = document.querySelector(".video__title");
const videoText = document.querySelector(".video__text");
let number = 0;

function play(){
	if(video.paused){
		video.play();
		btnPLay.innerHTML = "pause"
	} else{
     video.pause();
     btnPLay.innerHTML = "play"
	}
}

function mute() {
    if (video.muted) {
    	video.muted = false;
    	btnMute.innerHTML = "Off"
    } else {
    	video.muted = true;
    	btnMute.innerHTML = "On"
    }

}

function next() {
	if(number < playlist.length - 1) {
 		number++;
	} else {
		number = 0
	}
	videoTitle.innerHTML = PlayTitle[number];
	videoText.innerHTML = PlayText[number];
	video.src = `video/${playlist[number]}.mp4`;
}

function prev () {
	if (number !=0) {
  		number--;
	}else {
		number = playlist.length -1
	}
	videoTitle.innerHTML = PlayTitle[number];
	videoText.innerHTML = PlayText[number];
	video.src = `video/${playlist[number]}.mp4`;
}
	
