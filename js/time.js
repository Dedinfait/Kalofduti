function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = plusZero(hour);
    min = plusZero(min);
    sec = plusZero(sec);
    document.getElementById("time").innerText = hour + ":" + min+ ":" + sec;
    console.log(hour, min, sec);
    setTimeout(currentTime, 1000)
 }

 function plusZero(number){
 	if (number < 10) {
 		return "0" + number;
 	}
 	else{
 		return number ;
 	}
 }

 currentTime();