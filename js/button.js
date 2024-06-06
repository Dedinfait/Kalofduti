var	buyf = false;



function buy() {
	if (!buyf){
document.getElementById('btn').style.background = "lime";
	document.getElementById('btn').innerHTML = "В корзине";
	buyf = true;
	} else{
		document.getElementById('btn').style.background = "white";
	document.getElementById('btn').innerHTML = "Приобрести Sigma";
	buyf = false;
	}

}
