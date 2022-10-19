const d = document;
export default function recetaButtonsInteraction(descripcionBtn, ingredientesBtn, ocultar) {
	d.addEventListener("click", (e) => {
		const $descBtn = d.querySelector(descripcionBtn),
			$ingBtn = d.querySelector(ingredientesBtn),
			$titulo = d.querySelector(ocultar);

		if (e.target.matches(descripcionBtn)) {
			$descBtn.classList.toggle("isActive");
			$ingBtn.classList.remove("isActive");
		}
		if (e.target.matches(ingredientesBtn)) {
			$ingBtn.classList.toggle("isActive");
			$descBtn.classList.remove("isActive");
		}
		if ($ingBtn.classList.contains("isActive") || $descBtn.classList.contains("isActive"))
			$titulo.classList.add("hidden");
		else $titulo.classList.remove("hidden");

		console.log(e.target);
		console.log(e.target.matches(descripcionBtn) || e.target.matches(ingredientesBtn));
	});
}
