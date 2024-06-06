const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

function choiceLight(){
	console.log("Light")
	header.style.background = "blue";
	header.style.transition = "10s ease-out 0.5s";
	footer.style.background = "blue";
	footer.style.transition = "10s ease-out 0.5s";
}
function choiceDark(){
	console.log("Dark")
	header.style.background = "orange";
	header.style.transition = "10s ease-out 0.5s";
	footer.style.background = "orange";
	footer.style.transition = "10s ease-out 0.5s";
}