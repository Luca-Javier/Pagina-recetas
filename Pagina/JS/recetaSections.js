const d = document;
export default function recetaButtonsInteraction(descripcionBtn, ingredientesBtn) {
	d.addEventListener("click", (e) => {
		let titulo = e.target.parentNode.parentNode.querySelector("h3");

		if (e.target.matches(descripcionBtn) || e.target.matches(ingredientesBtn)) {
			e.target.classList.toggle("isActive");

			titulo.classList.toggle("isActive");
			console.log("ejecuto");
		}
		/* if (clicked) {
				titulo.style.toggle("display:none;");
			} else {
				e.target.parentNode.parentNode.style.backgroundColor = "red";
			} */
		console.log(e.target);
		console.log(e.target.matches(descripcionBtn) || e.target.matches(ingredientesBtn));
	});
}
