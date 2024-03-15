//buttons
const btnTipo1 = document.getElementById("btnTipo1");
const btnTipo2 = document.getElementById("btnTipo2");
const btnTipo3 = document.getElementById("btnTipo3");
const btnTipo4 = document.getElementById("btnTipo4");
//sliders
const sliderTipo1 = document.getElementById("sliderTipo1");
const sliderTipo2 = document.getElementById("sliderTipo2");
const sliderTipo3 = document.getElementById("sliderTipo3");
const sliderTipo4 = document.getElementById("sliderTipo4");
//default
btnTipo1.classList.add("highlight");
clearStyles(btnTipo1, sliderTipo1);
//
btnTipo1.addEventListener("click", () => clearStyles(btnTipo1, sliderTipo1));
btnTipo2.addEventListener("click", () => clearStyles(btnTipo2, sliderTipo2));
btnTipo3.addEventListener("click", () => clearStyles(btnTipo3, sliderTipo3));
btnTipo4.addEventListener("click", () => clearStyles(btnTipo4, sliderTipo4));

function clearStyles(btn, slider) {
	btnTipo1.classList.remove("highlight");
	btnTipo2.classList.remove("highlight");
	btnTipo3.classList.remove("highlight");
	btnTipo4.classList.remove("highlight");
	btn.classList.add("highlight");
	sliderTipo1.classList.add("hide");
	sliderTipo2.classList.add("hide");
	sliderTipo3.classList.add("hide");
	sliderTipo4.classList.add("hide");
	slider.classList.remove("hide");
}
