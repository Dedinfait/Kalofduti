const nav = document.querySelector(".nav_list");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav_list");

function burgerClick() {
	console.log("burger yeaaaaaaah");
	nav.classList.toggle("nav_list_active");
	burger.classList.toggle("active");
	navLinks.forEach((link, index) =>{
		if (link.style.animation){
			link.style.animation = ''
		} else {
			link.style.animation = `navLinkAnim 1.5s ease forwards ${index / 7 + 0.5}s`;
		}
	})
}
