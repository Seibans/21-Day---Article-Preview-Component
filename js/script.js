const shared = document.querySelector(".shared");
const tooltip = document.querySelector(".tooltip");

shared.addEventListener("click", () => {
	tooltip.classList.toggle("oculto");
})